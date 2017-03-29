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
        validateParam = function (param) {
            if (typeof param !== 'string') {
                throw 'INVALID_PARAM';
            }
            if (!/^\{.*}$/.test(param)) {
                throw 'NOT_JSON_ROOT_FORMAT';
            }
        };

    return function (str) {
        validateParam(str);

        var queue = Array.from(str),
            object = {},
            scope = object,
            key = '', valueStr = '',
            ch, lastToken;

        while (queue.length > 0) {
            ch = queue.shift();
            if (ch === TOKEN.START) {
                lastToken = ch;
                key = '';
                continue;
            }
            if (ch === TOKEN.DELIMITER) {
                lastToken = ch;
                object[key] = {};
                valueStr = '';
                continue;
            }
            if (ch === TOKEN.END) {
                if (key) {
                    lastToken = ch;
                    object[key] = eval('{' + valueStr + '}');//eval can be harmful
                }
                continue;
            }

            if (lastToken === TOKEN.START) {
                key += ch;
                continue;
            }
            if (lastToken === TOKEN.DELIMITER) {
                valueStr += ch;
                continue;
            }
        }
        return object;
    };
};
