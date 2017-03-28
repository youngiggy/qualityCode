describe('jsonParser', function () {
    'use strict';

    var validJsonStrings,
        parser;

    beforeEach(function() {
        parser = jsonParser();
    });

    it('returns an object with valid string', function () {
        var parsedObj = parser('');
        expect(typeof parsedObj).toEqual('object');
        expect(parsedObj).toEqual({});
    });
});
