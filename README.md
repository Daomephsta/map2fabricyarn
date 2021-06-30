# map2fabricyarn
DokuWiki plugin to remap text from Intermediary names to Yarn names

## Syntax
### Code Blocks
map2fabricyarn adds `<yarncode>` & `<yarnfile>`. 
All intermediary names inside code blocks created using `<yarncode>` & `<yarnfile>` are remapped to Yarn. 
Otherwise their syntax and behaviour is identical to DokuWiki's [`<code>` & `<file>`](https://www.dokuwiki.org/wiki:syntax#code_blocks).

### Plain/Formatted Text
In other situations, use the `<yarn>` tag. The content to remap should be inside the `<>`, separated from `<yarn` by a single space.  
Example: `<yarn class_2960>` results in the text Identifier at the time of writing. 
This tag can have [formatting](https://www.dokuwiki.org/wiki:syntax#basic_text_formatting) by the standard tags.

## Fully Qualified Class Names
To output a fully qualified yarn class name, input a fully qualified intermediary name by prefixing it with `net.minecraft.`

## Installation
Download the source into lib/plugins/map2fabricyarn. A restart is unnecessary.

## Mapping Files
`data/map2fabricyarn/yarn.tiny` must contain Tiny V2 format mappings from intermediary to named.
`data/map2fabricyarn/intermediary.tiny` must contain Tiny V2 format mappings from any namespace to intermediary.  
You must create and update these files yourself.  
Pages using map2fabricyarn will automatically rebuild when any mappings file is updated.
