<?php
class action_plugin_map2fabricyarn extends DokuWiki_Action_Plugin 
{   
    const MAPPINGS_FILE = DOKU_INC.'data/map2fabricyarn/mappings.tiny';
    //PHP regex engine caches regexes for us
    const REMAP_ZONE_PATTERN = '/<map_to_yarn>(\X*?)<\/map_to_yarn>/';
    const INTERMEDIARY_NAME_PATTERN = 
        '/(net\.minecraft\.class|class|method|field)_\d+/';
    private static $classes = array(),
                   $methods = array(),
                   $fields = array();

    static function loadMappings()
    {
        $mappings = fopen(self::MAPPINGS_FILE, 'r');
        if ($mappings)
        {
            while (($line = fgets($mappings)) !== false)
            {
                $line = trim($line);
                $tokens = explode("\t", $line);
                $mappingType = $tokens[0];
                if ($mappingType == 'c')
                {
                    [ , $intermediary, $yarn] = $tokens;
                    if (self::startsWith($intermediary, 'net/minecraft/class'))
                    {
                        self::$classes[self::simpleName($intermediary)] = 
                            self::sourceName($yarn);
                    }
                }
                else if ($mappingType == 'm')
                {
                    [ , , $intermediary, $yarn] = $tokens;
                    if (self::startsWith($intermediary, 'method'))
                        self::$methods[$intermediary] = $yarn;
                }
                else if ($mappingType == 'f')
                {
                    [ , , $intermediary, $yarn] = $tokens;
                    if (self::startsWith($intermediary, 'field'))
                        self::$fields[$intermediary] = $yarn;
                }
            }
            fclose($mappings);
        }
    }
    
    function register(Doku_Event_Handler $controller)
    {
        $controller->register_hook('PARSER_WIKITEXT_PREPROCESS', 'AFTER', 
            $this, 'remapWikiText');
        $controller->register_hook('PARSER_CACHE_USE', 'BEFORE', 
            $this, 'addCacheDependencies');
    }
    
    public function remapWikiText(Doku_Event $event)
    {
        self::loadMappings();
        $replacements = 0;
        $event->data = preg_replace_callback(self::REMAP_ZONE_PATTERN, 
            array($this, 'map_zone'), $event->data, -1, $replacements);
        // Marker to trigger metadata addition
        if ($replacements > 0)
            $event->data .= '~~MAP2FABRICYARN~~';
    }
    
    function map_zone($groups)
    {
        return preg_replace_callback(self::INTERMEDIARY_NAME_PATTERN, 
            array($this, 'map_intermediary'), $groups[1]);
    }
    
    function map_intermediary($groups)
    {
        [$name, $type] = $groups;
        switch ($type)
        {
            // Fully qualified intermediary class names are replaced 
            // with fully qualified yarn class names
            case 'net.minecraft.class':
                return self::$classes[simpleName($name)] ?: $name;
            // Simple intermediary class names are replaced with 
            // simple yarn class names. 
            case 'class': 
                return self::simpleName(self::$classes[$name]) ?: $name;
            case 'method':
                return self::$methods[$name] ?: $name;
            case 'field':
                return self::$fields[$name] ?: $name;
        }
    }
    
    public function addCacheDependencies(Doku_Event $event)
    {
        if(p_get_metadata($event->data->page, 
            'plugin map2fabricyarn')['used'])
        {
            array_push($event->data->depends['files'], 
                self::MAPPINGS_FILE);
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