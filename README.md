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

## Mapping File
Mappings are loaded from `data\map2fabricyarn\mappings.tiny`. You must create and update this file yourself. 
Pages using map2fabricyarn will automatically rebuild when the mappings file is updated.
