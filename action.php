<?php
class action_plugin_map2fabricyarn extends DokuWiki_Action_Plugin 
{   
    private static $classes = array(),
                   $methods = array(),
                   $fields = array();

    static function loadMappings()
    {
        $mappings = fopen(DOKU_INC.'data/map2fabricyarn/mappings.tiny',  'r');
        if ($mappings)
        {
            while (($line = fgets($mappings)) !== false)
            {
                $line = rtrim($line);
                $tokens = explode("\t", $line);
                if ($tokens[0] === 'c' and 
                    self::startsWith($tokens[1], 'net/minecraft/class'))
                {
                    self::$classes[self::simpleName($tokens[1])] = 
                        self::sourceName($tokens[2]);
                }
                else if ($tokens[1] === 'm' and 
                    self::startsWith($tokens[3], 'method'))
                {
                    self::$methods[$tokens[3]] = $tokens[4];
                }
                else if ($tokens[1] === 'f' and 
                    self::startsWith($tokens[3], 'field'))
                {
                    self::$fields[$tokens[3]] = $tokens[4];
                }
            }
            fclose($mappings);
        }
    }
    
    function register(Doku_Event_Handler $controller)
    {
        $controller->register_hook('PARSER_WIKITEXT_PREPROCESS', 'AFTER', 
            $this, 'remapWikiText');
    }
    
    public function remapWikiText(Doku_Event $event)
    {
        self::loadMappings();
        $event->data = preg_replace_callback(
            '/<map_to_yarn>(\X*?)<\/map_to_yarn>/', 
            array($this, 'map_zone'), $event->data);
    }
    
    function map_zone($groups)
    {
        return preg_replace_callback(
            '/(net\.minecraft\.class|class|method|field)_\d+/', 
            array($this, 'map_intermediary'), $groups[1]);
    }
    
    function map_intermediary($groups)
    {
        $match = &$groups[0];
        switch ($groups[1])
        {
            // Fully qualified intermediary class names are replaced 
            // with fully qualified yarn class names
            case 'net.minecraft.class':
                return self::$classes[simpleName($match)] ?: $match;
            // Simple intermediary class names are replaced with 
            // simple yarn class names. 
            case 'class': 
                return self::simpleName(self::$classes[$match]) ?: $match;
            case 'method':
                return self::$methods[$match] ?: $match;
            case 'field':
                return self::$fields[$match] ?: $match;
        }
    }
    
    static function simpleName($internalName)
    {
        // Split on /.$ and return last element
        return end(preg_split('/[\/\.$]/', $internalName));
    }
    
    static function sourceName($internalName)
    {
        return str_replace('/', '.', $internalName);
    }
    
    // PHP 7
    static function startsWith($search, $start)
    {
        return substr($search, 0, strlen($start)) === $start;
    }
}