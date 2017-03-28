describe('jsonParser', function () {
    'use strict';

    var validJsonStrings,
        parser;

    beforeEach(function() {
        parser = jsonParser();
    });

    it('requires parameter as a string surround by braces', function () {
        var parsedObj,
            validStrings = [
                '{a:b}',
                '{a:{b:c}}',
                '{}'
            ],
            notValidStrings = [
                'dfsdfsfds',
                '',
                {},
                true,
                0,
                12,
                Infinity,
                null
            ];

        validStrings.forEach(function (item) {
            expect(function () {
                parsedObj = parser(item);
            }).not.toThrow();
        });
        notValidStrings.forEach(function (item) {
            expect(function () {
                parsedObj = parser(item);
            }).toThrow();
        });
    });

    it('returns an object with valid string', function () {
        var parsedObj = parser('{}');
        expect(typeof parsedObj).toEqual('object');
        expect(parsedObj).toEqual({});
    });
});
