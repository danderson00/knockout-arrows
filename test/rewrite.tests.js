var rewrite = require('../rewrite'),
    expect = require('chai').expect

suite('rewrite', function () {
    test("compiles es6arrow functions to es5", function () {
        expect(rewrite('x => x.test')).to.equal('(function (x) {return ko.unwrap(x.test);}.bind(this));')
        expect(rewrite('(x, y) => x + y')).to.equal('(function (x, y) {return ko.unwrap(x + y);}.bind(this));')
    })
})
