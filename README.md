knockout-arrows
===============

Rewrites knockout templates on the server to enable the use of arrow functions.

Installation
------------

    npm install knockout-arrows

Usage
-----

Command line

    knockout-arrows < index.html > transformed.html

API

    var rewrite = require('knockout-arrows'),
        template = '<ul data-bind="foreach: items.filter(item => item.done)></ul>'

    console.log(rewrite(template))

Test

    npm test

Acknowledgements
----------------

Based on Chris Price's blog post at http://blog.scottlogic.com/2014/02/28/arrow-functions-in-knockoutjs.html.

License
-------

MIT
