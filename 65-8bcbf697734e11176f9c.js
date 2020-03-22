(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{628:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar conf = {\r\n    comments: {\r\n        blockComment: ['\x3c!--', '--\x3e'],\r\n    },\r\n    brackets: [\r\n        ['<', '>']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '<', close: '>' },\r\n        { open: '\\'', close: '\\'' },\r\n        { open: '\"', close: '\"' },\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '<', close: '>' },\r\n        { open: '\\'', close: '\\'' },\r\n        { open: '\"', close: '\"' },\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.xml',\r\n    ignoreCase: true,\r\n    // Useful regular expressions\r\n    qualifiedName: /(?:[\\w\\.\\-]+:)?[\\w\\.\\-]+/,\r\n    tokenizer: {\r\n        root: [\r\n            [/[^<&]+/, ''],\r\n            { include: '@whitespace' },\r\n            // Standard opening tag\r\n            [/(<)(@qualifiedName)/, [\r\n                    { token: 'delimiter' },\r\n                    { token: 'tag', next: '@tag' }\r\n                ]],\r\n            // Standard closing tag\r\n            [/(<\\/)(@qualifiedName)(\\s*)(>)/, [\r\n                    { token: 'delimiter' },\r\n                    { token: 'tag' },\r\n                    '',\r\n                    { token: 'delimiter' }\r\n                ]],\r\n            // Meta tags - instruction\r\n            [/(<\\?)(@qualifiedName)/, [\r\n                    { token: 'delimiter' },\r\n                    { token: 'metatag', next: '@tag' }\r\n                ]],\r\n            // Meta tags - declaration\r\n            [/(<\\!)(@qualifiedName)/, [\r\n                    { token: 'delimiter' },\r\n                    { token: 'metatag', next: '@tag' }\r\n                ]],\r\n            // CDATA\r\n            [/<\\!\\[CDATA\\[/, { token: 'delimiter.cdata', next: '@cdata' }],\r\n            [/&\\w+;/, 'string.escape'],\r\n        ],\r\n        cdata: [\r\n            [/[^\\]]+/, ''],\r\n            [/\\]\\]>/, { token: 'delimiter.cdata', next: '@pop' }],\r\n            [/\\]/, '']\r\n        ],\r\n        tag: [\r\n            [/[ \\t\\r\\n]+/, ''],\r\n            [/(@qualifiedName)(\\s*=\\s*)(\"[^\"]*\"|'[^']*')/, ['attribute.name', '', 'attribute.value']],\r\n            [/(@qualifiedName)(\\s*=\\s*)(\"[^\">?\\/]*|'[^'>?\\/]*)(?=[\\?\\/]\\>)/, ['attribute.name', '', 'attribute.value']],\r\n            [/(@qualifiedName)(\\s*=\\s*)(\"[^\">]*|'[^'>]*)/, ['attribute.name', '', 'attribute.value']],\r\n            [/@qualifiedName/, 'attribute.name'],\r\n            [/\\?>/, { token: 'delimiter', next: '@pop' }],\r\n            [/(\\/)(>)/, [\r\n                    { token: 'tag' },\r\n                    { token: 'delimiter', next: '@pop' }\r\n                ]],\r\n            [/>/, { token: 'delimiter', next: '@pop' }],\r\n        ],\r\n        whitespace: [\r\n            [/[ \\t\\r\\n]+/, ''],\r\n            [/\x3c!--/, { token: 'comment', next: '@comment' }]\r\n        ],\r\n        comment: [\r\n            [/[^<\\-]+/, 'comment.content'],\r\n            [/--\x3e/, { token: 'comment', next: '@pop' }],\r\n            [/\x3c!--/, 'comment.content.invalid'],\r\n            [/[<\\-]/, 'comment.content']\r\n        ],\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///../node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js?")}}]);