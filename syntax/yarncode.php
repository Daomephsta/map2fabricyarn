<?php
require_once(DOKU_INC.'\lib\plugins\map2fabricyarn\mappings.php');

// Variant of <code> that remaps Intermediary to Yarn 
class syntax_plugin_map2fabricyarn_yarncode extends DokuWiki_Syntax_Plugin 
{   
    const YARNCODE_ARGS = 
        '/<yarncode(?:\s+(\w+))?(?:\s+([\w.]+))?(?:\s+\[(.+)\])?>((?:.|\n)+)/';

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
                $matches[3] = DokuSyntax::decode_options($matches[3]);
            $matches[4] = Mappings::map_all_intermediary($matches[4]);
            return [true, $matches];
        }
        return [false];
    }
    
    function render($format, Doku_Renderer $renderer, $data)
    {
        if ($format == 'xhtml' and $data[0])
        {
            [$_, $language, $file, $options, $code] = $data[1];
            $renderer->code($code, $language, $file, $options);
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
}
?>