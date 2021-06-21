<?php
require_once(DOKU_INC.'\lib\plugins\map2fabricyarn\mappings.php');
require_once(DOKU_INC.'\lib\plugins\map2fabricyarn\dokusyntax.php');

// Variant of <file> that remaps Intermediary to Yarn 
class syntax_plugin_map2fabricyarn_yarnfile extends DokuWiki_Syntax_Plugin 
{   
    const YARNFILE_ARGS = 
        '/<yarnfile(?:\s+(\w+))?(?:\s+([\w.]+))?(?:\s+\[(.+)\])?>((?:.|\n)+)/';

    function connectTo($mode)
    {
        $this->Lexer->addEntryPattern('<yarnfile\b.*?>.*?(?=</yarnfile>)', 
            $mode, 'plugin_map2fabricyarn_yarnfile');
        $this->Lexer->addExitPattern('</yarnfile>', 
            'plugin_map2fabricyarn_yarnfile');
    }

    function handle($match, $state, $pos, Doku_Handler $handler)
    {
        if ($state == DOKU_LEXER_ENTER)
        {
            if (!preg_match(self::YARNFILE_ARGS, $match, $matches))
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