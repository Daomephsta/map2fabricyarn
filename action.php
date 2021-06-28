<?php
require_once(DOKU_INC.'\lib\plugins\map2fabricyarn\mappings.php');

class action_plugin_map2fabricyarn extends DokuWiki_Action_Plugin 
{   
    function register(Doku_Event_Handler $controller)
    {
        $controller->register_hook('PARSER_CACHE_USE', 'BEFORE', 
            $this, 'addCacheDependencies');
    }
    
    public function addCacheDependencies(Doku_Event $event)
    {
        if(p_get_metadata($event->data->page, 
            'plugin map2fabricyarn')['used'])
        {
            array_push($event->data->depends['files'], 
                Mappings::FILE);
        }
    }
}
?>