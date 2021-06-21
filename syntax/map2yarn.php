<?php
require_once(DOKU_INC.'\lib\plugins\map2fabricyarn\mappings.php');

// Remaps plain text from Intermediary to Yarn 
class syntax_plugin_map2fabricyarn_map2yarn extends DokuWiki_Syntax_Plugin 
{   
    function connectTo($mode)
    {
        $this->Lexer->addSpecialPattern("<yarn .+?>", 
            $mode, 'plugin_map2fabricyarn_map2yarn');
    }

    function handle($match, $state, $pos, Doku_Handler $handler)
    {
        if ($state = DOKU_LEXER_SPECIAL)
        {
            $code = substr($match, strlen('<yarn '), 
                strlen($match) - strlen('<yarn ') - 1);
            // Escapes HTML special characters for security
            return [Mappings::map_all_intermediary(hsc($code))];
        }
        return [];
    }
    
    function render($format, Doku_Renderer $renderer, $data)
    {
        if ($format == 'xhtml' and $data)
        {
            $renderer->doc .= $data[0];
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
        // Not a typo
        return 'substition';
    }
    
    function getSort()
    {
        return 999;
    }
}
?>