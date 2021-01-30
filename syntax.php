<?php
class syntax_plugin_map2fabricyarn extends DokuWiki_Syntax_Plugin 
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

    function connectTo($mode)
    {
        $this->Lexer->addEntryPattern('<map_to_yarn>(?=.*</map_to_yarn>)', $mode, 'plugin_map2fabricyarn');
        $this->Lexer->addPattern('.*(?=</map_to_yarn>)', 'plugin_map2fabricyarn');
    }
    
    function postConnect() 
    { 
        $this->Lexer->addExitPattern('</map_to_yarn>', 'plugin_map2fabricyarn'); 
    }
    
    function handle($match, $state, $pos, Doku_Handler $handler)
    {
        if ($state == DOKU_LEXER_MATCHED)
        {
            self::loadMappings();
            $mapped = preg_replace_callback(
                '/(net\.minecraft\.class|class|method|field)_\d+/', 
                array($this, 'map'), $match);
            $rendered = $this->render_text($mapped);
            return array($rendered);
        }
        return array();
    }
    
    function map($groups)
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
    
    function render($mode, Doku_Renderer $renderer, $data)
    {
        if ($mode == 'xhtml')
        {
            $renderer->doc .= $data[0];
            return true;
        }
        return false;
    }
    
    function getType()
    {
        return 'container';
    }
    
    function getAllowedTypes()
    {
        return array();
    }
    
    function getPType()
    {
        return 'block';
    }
    
    function getSort()
    {
        return 999;
    }
}