describe('jsonParser', function () {
    'use strict';

    var validJsonStrings,
        parser;

    beforeEach(function() {
        parser = jsonParser();
    });

    it('requires parameter as a string', function () {
        var parsedObj,
            strings = [
                'dfsdfsdf',
                ''
            ],
            notStrings = [
                {},
                true,
                0,
                12,
                Infinity,
                null
            ];
        strings.forEach(function (item) {
            expect(function () {
                parsedObj = parser(item);
            }).not.toThrow();
        });
        notStrings.forEach(function (item) {
            expect(function () {
                parsedObj = parser(item);
            }).toThrow();
        });
    });

    it('returns an object with valid string', function () {
        var parsedObj = parser('');
        expect(typeof parsedObj).toEqual('object');
        expect(parsedObj).toEqual({});
    });
});
