var cheerio = require('cheerio'),
    rewrite = require('./rewrite')

module.exports = function (html) {
    var $ = cheerio.load(html)

    $('[data-bind]').each(function () {
        $(this).attr('data-bind', rewriteBinding($(this).attr('data-bind')))
    })

    return $.html()
}

function rewriteBinding(binding) {
    var compiled = rewrite('x={' + binding + '}')
    return compiled.substring(compiled.indexOf('{') + 1, compiled.lastIndexOf('}')).trim()
}
