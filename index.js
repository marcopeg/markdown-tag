/**
 * PoliteJs - MarkdownTag
 * ======================
 *
 * it parse a comment tag delimited Markdown source withing an HTML structure 
 *
 * ## Usage
 * var markdownTag = require('polite-markdown-tag');
 * markdownTag(htmlSource);
 */

var marked = require('marked')

module.exports = function(html, openTag, closeTag) {
    openTag = openTag || '<markdown-tag>';
    closeTag = closeTag || '</markdown-tag>';

    var startIdx = html.indexOf(openTag);
    var safeWhile = 100;
    while (startIdx !== -1 && safeWhile > 0) {

        var endIdx = html.indexOf(closeTag, startIdx);
        if (endIdx === -1) {
            return html;
        }

        // find markdown and strip indentation tags
        var markdown = html.substring(startIdx + openTag.length, endIdx);
        if (markdown.indexOf('\n') !== -1) {
            markdown = markdown.replace(new RegExp(markdown.substring(markdown.lastIndexOf('\n')), 'g'), '\n');
        }

        html = html.substring(0, startIdx) 
             + marked(markdown) 
             + html.substring(endIdx + closeTag.length);

        startIdx = html.indexOf(openTag);
        safeWhile--;
    }

    return html;
};