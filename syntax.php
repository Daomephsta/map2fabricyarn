<?php
// Handles the marker used by the action plugin to indirectly set metadata
class syntax_plugin_map2fabricyarn extends DokuWiki_Syntax_Plugin 
{   
    function connectTo($mode)
    {
        $this->Lexer->addSpecialPattern('~~MAP2FABRICYARN~~', $mode, 'plugin_map2fabricyarn');
    }
    
    function handle($match, $state, $pos, Doku_Handler $handler)
    {
        return array();
    }
    
    function render($format, Doku_Renderer $renderer, $data)
    {
        if ($format == 'metadata')
        {
            // Mark this page as depending on this plugin
            $renderer->meta['plugin']['map2fabricyarn']['used'] = true;
            return true;
        }
        return false;
    }
    
    function getType()
    {
        // Not a typo
        // See https://www.dokuwiki.org/devel:syntax_plugins#fn__5.
        return 'substition';
    }
    
    function getSort()
    {
        return 999;
    }
}