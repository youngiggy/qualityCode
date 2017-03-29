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
        str = str.replace(/(^\s*|\s*$)/g, '');

        validateParam(str);

        var queue = Array.from(str),
            object = {},
            scope = object,
            key = '', valueStr = '',
            ch, lastToken;

        while (queue.length > 0) {
            ch = queue.shift();
            if (ch.replace(/\s/, '') === '') {
                continue;
            }
            if (ch === TOKEN.START) {
                if (lastToken === TOKEN.DELIMITER) {
                    scope = scope[key];
                }
                lastToken = ch;
                key = '';
                continue;
            }
            if (ch === TOKEN.DELIMITER) {
                lastToken = ch;
                scope[key] = {};
                valueStr = '';
                continue;
            }
            if (ch === TOKEN.END) {
                if (key) {
                    lastToken = ch;
                    scope[key] = eval('{' + valueStr + '}');//eval can be harmful
                }
                continue;
            }

            if (lastToken === TOKEN.START) {
                key += (ch !== '"') ? ch : '';
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
