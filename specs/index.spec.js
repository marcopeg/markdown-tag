var markdownTag = require('../index');
var fs = require('fs');

describe('Markdown Tag', function() {

    it('should parse markdown between inline tags', function() {
        var source = 'foo <markdown-tag># title</markdown-tag> hee';
        expect(markdownTag(source)).to.contain('<h1');
    });
    
    it('should parse markdown from an html file', function() {
        var source = fs.readFileSync('specs/index.spec.html', 'utf8');
        expect(markdownTag(source)).to.contain('<h1');
    });

});
