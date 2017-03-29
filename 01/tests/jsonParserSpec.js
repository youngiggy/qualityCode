describe('jsonParser', function () {
    'use strict';

    var validJsonStrings,
        parser;

    beforeEach(function() {
        parser = jsonParser();
    });

    it('throws error when the argument is invalid format', function () {
        var parsedObj,
            notValidStrings = [
                'dfsdfsfds',
                '{un:defined}',
                '',
                {},
                true,
                0,
                12,
                Infinity,
                null
            ];

        notValidStrings.forEach(function (item) {
            expect(function () {
                parsedObj = parser(item);
            }).toThrow();
        });
    });

    it('parses an JSON object from a valid string', function () {
        var parsedObj,
            expectedObj,
            validStrings = [
                ['{}', {}],
                ['{a:1}', {a:1}],
                ['   { a : 1 } ', {a:1}],
                ['   { contains_tab :	1 } ', { contains_tab :	1 }],
                ['{a:{b:1}}', {a:{b:1}}],
                ['{a:{b:-1}}', {a:{b:-1}}],
                ['{aa:{bbb:{cccc:"hey"}}}', {aa:{bbb:{cccc:"hey"}}}],
                // ['{"aa":{"bbb":{"cccc":"hey"}}}', {"aa":{"bbb":{"cccc":"hey"}}}],
                ['{}', {}]
            ];

        validStrings.forEach(function (item) {
            expect(function () {
                parsedObj = parser(item[0]);
                expectedObj = item[1];
                // expectedObj = JSON.parse(item);
            }).not.toThrow();
            expect(typeof parsedObj).toEqual('object');
            expect(parsedObj).toEqual(expectedObj);
        });
    });
});
