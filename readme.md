Markdown Tag
============

It parse one or more **tag delimited _Markdown_ areas** from a text source.  
This way you can put little _Markdown_ portions into your big _HTML_ page.

## Usage

> I mostly use this utility in _GruntJS_ tasks combined with the _grunt-contrib-copy_ module.

#### index.html

```
<html>
    ...
    <body>
        ...
        
        <markdown-tag>
        My _Markdown_ text
        </markdown-tag>
        
        ...
        
        <markdown-tag>
        ## another piece
        </markdown-tag>
        
        ...
    </body>
<html>
```


#### script.js

```
var fs = require('fs');
var markdownTag = require('markdown-tag');

var html = markdownTag(fs.readFileSync('index.html', 'utf8'));
```

#### Custom Delimiters

With version `0.2.0` you can specify your custom delimiters.

Take a look at the following chunk of _HTML_ page:

    <!-- Markdown -->
    my **Markdown** _template_
    <!-- /Markdown -->

then you can parse it this way:

    markdownTag(html, '<!-- Markdown -->', '<!-- /Markdown -->');


## Tests

I wrote some basic tests for this utility. In order to run the tests you need _GruntJS_ to 
be installed globally in your machine.

```
npm install && grunt
```


## Parsed with Marked

So far I use [Marked](https://www.npmjs.org/package/marked) for the real _Markdown_ 
parsing but I'm looking for a parser which accept a little more expanded syntax.