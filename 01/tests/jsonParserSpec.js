describe('jsonParser', function () {
    'use strict';

    var validJsonStrings,
        parser;

    beforeEach(function() {
        parser = jsonParser();
        validJsonStrings = [
            '{"a":3}',
            '{"a":3, "b":{"d":5}}',
            '{"a":3, "b":{"d":{"e":5}}}'
        ];
    });

    it('returns an object with valid string', function () {
        validJsonStrings.forEach(function (str) {
            var parsedObj = parser(str);
            expect(typeof parsedObj).toEqual('object');
            expect(parsedObj).toEqual({});
        });
    });
});
