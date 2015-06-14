var rewrite = require('../index'),
    expect = require('chai').expect

suite('rewrite html', function () {
    test("compiles data-bind attributes", function () {
        expect(rewrite('<span data-bind="text: x => x.test"></span>'))
            .to.equal('<span data-bind="text: function (x) {return ko.unwrap(x.test);}.bind(this)"></span>')
    })

    test("compiles multiple data-bind attributes", function () {
        expect(rewrite('<span data-bind="text: x => x.test, value: x => x.test2"></span>'))
            .to.equal('<span data-bind="text: function (x) {return ko.unwrap(x.test);}.bind(this),value: function (x) {return ko.unwrap(x.test2);}.bind(this)"></span>')
    })
})
