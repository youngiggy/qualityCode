describe('jsonParser', function () {
    'use strict';

    var validJsonStrings;

    beforeEach(function() {
        validJsonStrings = [
            '{"a":3}',
            '{"a":3, "b":{"d":5}}',
            '{"a":3, "b":{"d":{"e":5}}}'
        ];
    });

    it('returns an object with valid string', function () {
        var parsedObj = jsonParser(validJsonStrings[0]);
        expect(typeof parsedObj).toEqual('object');
        expect(parsedObj).toEqual({});
    });
});
