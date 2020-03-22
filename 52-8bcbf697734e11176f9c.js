(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{616:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '\\'',\r\n    },\r\n    brackets: [\r\n        ['(', ')'], ['[', ']'],\r\n        ['If', 'EndIf'],\r\n        ['While', 'EndWhile'],\r\n        ['For', 'EndFor'],\r\n        ['Sub', 'EndSub']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\r\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\r\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.sb',\r\n    ignoreCase: true,\r\n    brackets: [\r\n        { token: 'delimiter.array', open: '[', close: ']' },\r\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\r\n        // Special bracket statement pairs\r\n        { token: 'keyword.tag-if', open: 'If', close: 'EndIf' },\r\n        { token: 'keyword.tag-while', open: 'While', close: 'EndWhile' },\r\n        { token: 'keyword.tag-for', open: 'For', close: 'EndFor' },\r\n        { token: 'keyword.tag-sub', open: 'Sub', close: 'EndSub' },\r\n    ],\r\n    keywords: [\r\n        'Else', 'ElseIf', 'EndFor', 'EndIf', 'EndSub', 'EndWhile',\r\n        'For', 'Goto', 'If', 'Step', 'Sub', 'Then', 'To', 'While'\r\n    ],\r\n    tagwords: [\r\n        'If', 'Sub', 'While', 'For'\r\n    ],\r\n    operators: ['>', '<', '<>', '<=', '>=', 'And', 'Or', '+', '-', '*', '/', '='],\r\n    // we include these common regular expressions\r\n    identifier: /[a-zA-Z_][\\w]*/,\r\n    symbols: /[=><:+\\-*\\/%\\.,]+/,\r\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // whitespace\r\n            { include: '@whitespace' },\r\n            // classes\r\n            [/(@identifier)(?=[.])/, 'type'],\r\n            // identifiers, tagwords, and keywords\r\n            [/@identifier/, {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@operators': 'operator',\r\n                        '@default': 'variable.name'\r\n                    }\r\n                }],\r\n            // methods, properties, and events\r\n            [/([.])(@identifier)/, {\r\n                    cases: {\r\n                        '$2': ['delimiter', 'type.member'],\r\n                        '@default': ''\r\n                    }\r\n                }],\r\n            // numbers\r\n            [/\\d*\\.\\d+/, 'number.float'],\r\n            [/\\d+/, 'number'],\r\n            // delimiters and operators\r\n            [/[()\\[\\]]/, '@brackets'],\r\n            [/@symbols/, {\r\n                    cases: {\r\n                        '@operators': 'operator',\r\n                        '@default': 'delimiter'\r\n                    }\r\n                }],\r\n            // strings\r\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\r\n            [/\"/, 'string', '@string'],\r\n        ],\r\n        whitespace: [\r\n            [/[ \\t\\r\\n]+/, ''],\r\n            [/(\\').*$/, 'comment']\r\n        ],\r\n        string: [\r\n            [/[^\\\\\"]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\\\./, 'string.escape.invalid'],\r\n            [/\"C?/, 'string', '@pop']\r\n        ],\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///../node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js?")}}]);