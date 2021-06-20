<?php
// Variant of <code> that remaps Intermediarty to Yarn 
class syntax_plugin_map2fabricyarn_yarncode extends DokuWiki_Syntax_Plugin 
{   
    const MAPPINGS_FILE = DOKU_INC.'data/map2fabricyarn/mappings.tiny';
    const YARNCODE_ARGS = '/<yarncode(?:\s+(\w+))?(?:\s+(\w+))?>((?:.|\n)+)/';
    const INTERMEDIARY = '/(net\.minecraft\.class|class|method|field)_\d{4,5}/';
    private static $classes = array(),
                   $methods = array(),
                   $fields = array();

    function connectTo($mode)
    {
        $this->Lexer->addEntryPattern('<yarncode\b.*?>.*?(?=</yarncode>)', 
            $mode, 'plugin_map2fabricyarn_yarncode');
        $this->Lexer->addExitPattern('</yarncode>', 
            'plugin_map2fabricyarn_yarncode');
    }

    function handle($match, $state, $pos, Doku_Handler $handler)
    {
        if ($state == DOKU_LEXER_ENTER)
        {
            if (!preg_match(self::YARNCODE_ARGS, $match, $matches))
                return [false];
            $matches[3] = preg_replace_callback(self::INTERMEDIARY, 
                function ($groups)
                {
                    return self::map_intermediary($groups[0], $groups[1]);
                }, 
                $matches[3]);
            return [true, $matches];
        }
        return [false];
    }
    
    function render($format, Doku_Renderer $renderer, $data)
    {
        if ($format == 'xhtml' and $data[0])
        {
            [$_, $language, $file, $code] = $data[1];
            $renderer->code($code, $language, $file);
            return true;
        }
        else if ($format == 'metadata')
        {
            // Mark this page as depending on this plugin
            $renderer->meta['plugin']['map2fabricyarn']['used'] = true;
            return true;
        }
        return false;
    }
    
    // https://www.dokuwiki.org/devel:syntax_plugins#syntax_types
    function getType()
    {
        return 'protected';
    }
    
    function getSort()
    {
        return 999;
    }

    static function map_intermediary($name, $type)
    {
        self::load_mappings();
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

    static function load_mappings()
    {
        if (self::$classes or self::$methods or self::$fields)
            return;
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