var rewrite = require('../rewrite'),
    expect = require('chai').expect

suite('rewrite', function () {
    test("compiles single argument es6 arrow functions to es5", function () {
        expect(rewrite('x => x.test')).to.equal('(function (x) {return ko.unwrap(x.test)}.bind(this))')
    })

    test("compiles multiple argument es6 arrow functions to es5", function () {
        expect(rewrite('(x, y) => x + y')).to.equal('(function (x, y) {return ko.unwrap(x + y)}.bind(this))')
    })

    test("supports returning object expressions", function () {
        expect(rewrite('x => { value: x.test }')).to.equal('(function (x) {return ko.unwrap({value:x.test})}.bind(this))')
    })
})
