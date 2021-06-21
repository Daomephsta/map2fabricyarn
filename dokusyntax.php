<?php
class DokuSyntax
{
    static function decode_options($options)
    {
        if (!$options)
            return [];
        foreach(explode(',', $options) as $opt)
        {
            // Split into key & value by '=', trim whitespace
            [$key, $value] = array_map('trim', explode('=', trim($opt)));
            // Double decode to convert 
            // string("true") -> string(true) -> bool(true), etc.
            $result[$key] = json_decode(json_decode($value));
        }
        return $result;
    }
}
?>