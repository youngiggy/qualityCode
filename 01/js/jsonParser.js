/*
 * 파서 규칙
 * 예 {"a":3, "b":{"d":5}}
 * 값은 숫자만 올 수 있고 또 다른 오브젝트를 포함할 수 있다
*/
var jsonParser = function () {
    'use strict';

    var TOKEN = {
            START: '{',
            DELIMITER: ':',
            END: '}'
        },
        object = {},
        scope = object;

    return function (str) {
        return object;
    };
};
