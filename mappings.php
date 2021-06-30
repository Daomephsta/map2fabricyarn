<?php
class Mappings
{
    const YARN = DOKU_INC.'data/map2fabricyarn/yarn.tiny';
    const INTERMEDIARY = DOKU_INC.'data/map2fabricyarn/intermediary.tiny';
    const INTERMEDIARY_NAME = '/(net\.minecraft\.class|class|method|field)_\d+/';
    private static $intermediary_names,
                   $unknown_names,
                   $classes,
                   $methods,
                   $fields;

    static function map_all_intermediary($text)
    {
        return preg_replace_callback(Mappings::INTERMEDIARY_NAME, 
            function ($groups)
            {
                return Mappings::map_intermediary($groups[0], $groups[1]);
            }, 
            $text);
    }

    static function map_intermediary($name, $type)
    {
        self::load_mappings();
        switch ($type)
        {
            // Fully qualified intermediary class names are replaced 
            // with fully qualified yarn class names
            case 'net.minecraft.class':
                $simple_name = self::simpleName($name);
                self::check_intermediary($simple_name);
                return self::$classes[$simple_name] ?: $name;
            // Simple intermediary class names are replaced with 
            // simple yarn class names. 
            case 'class': 
                self::check_intermediary($name);
                return self::simpleName(self::$classes[$name]) ?: $name;
            case 'method':
                self::check_intermediary($name);
                return self::$methods[$name] ?: $name;
            case 'field':
                self::check_intermediary($name);
                return self::$fields[$name] ?: $name;
        }
    }
                
    static function check_intermediary($name)
    {
        if (!isset(self::$intermediary_names[$name]))
            self::$unknown_names[] = $name;
    }

    static function write_missing(&$output)
    {
        if (self::$unknown_names)
        {
            $head = '<strong>map2fabricyarn</strong> - ' .
                'Page contains unknown Intermediary names:</br>';
            foreach(array_chunk(array_unique(self::$unknown_names), 5) as $name_chunk)
                $head .= implode(' ', $name_chunk) . '</br>';
            $output = $head . $output;
        }
    }
                
    static function load_mappings()
    {
        if (self::$classes or self::$methods or self::$fields)
            return;
        // Initialise
        self::load_intermediary();
        self::$classes = array();
        self::$methods = array();
        self::$fields = array();
        $mappings = fopen(self::YARN, 'r');
        if ($mappings)
        {
            // Skip header
            $line = fgets($mappings);
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
                        // 'Parent$1' will load in as '1', but anonymous classes 
                        // can't be named and thus can't occur in remapped text
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

    static function load_intermediary()
    {
        if (self::$intermediary_names)
            return;
        // Initialise
        self::$intermediary_names = array();
        self::$unknown_names = ['method_29713', 'method_29714', 'method_29715', 'method_29716', 'method_29717', 'method_29718', 'method_29713'];
        $intermediary = fopen(self::INTERMEDIARY, 'r');
        if ($intermediary)
        {
            // Skip header
            $line = fgets($intermediary);
            while (($line = fgets($intermediary)) !== false)
            {
                $line = trim($line);
                $tokens = explode("\t", $line);
                $mappingType = $tokens[0];
                $name = end($tokens);
                // 'Parent$1' will load in as '1', but anonymous classes can't
                // be named and thus can't occur in remapped text
                if ($mappingType == 'c')
                    $name = self::simpleName($name);
                // Use associative array as set, base PHP lacks true sets
                self::$intermediary_names[$name] = true;
            }
            fclose($intermediary);
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