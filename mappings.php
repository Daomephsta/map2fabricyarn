<?php

class Mappings
{
    const FILE = DOKU_INC.'data/map2fabricyarn/mappings.tiny';
    private static $classes = array(),
                   $methods = array(),
                   $fields = array();

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
        $mappings = fopen(self::FILE, 'r');
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
?>