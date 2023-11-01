"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Long.js":
/*!****************************!*\
  !*** ./components/Long.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./components/config.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\nvar mediaRecorder;\nvar audioText;\n// const DG_KEY = config.DG_KEY;\nconst DG_KEY = process.env.DG_KEY;\nconst Long = ()=>{\n    _s();\n    let currentText = \"\"; // if you want record all audio even if you stoped and restart MediaRecorder, so you should set it as a global variable\n    const [record, setRecord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cc, setCc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [animation, setAnimation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const startRec = ()=>{\n        setRecord(true);\n        setText(\"\");\n    };\n    const stopRec = async ()=>{\n        if (record && mediaRecorder && mediaRecorder.state !== \"inactive\") {\n            mediaRecorder.stop();\n            mediaRecorder.stream.getTracks().forEach((track)=>track.stop());\n        }\n        setRecord(false);\n    };\n    const deepGramAudio2text = ()=>{\n        navigator.mediaDevices.getUserMedia({\n            audio: true\n        }).then((stream)=>{\n            if (!MediaRecorder.isTypeSupported(\"audio/webm\")) {\n                return alert(\"Browser not supported\");\n            }\n            var options = {\n                mimeType: \"video/webm\"\n            };\n            mediaRecorder = new MediaRecorder(stream, options);\n            const socket = new WebSocket(\"wss://api.deepgram.com/v1/listen\", [\n                \"token\",\n                DG_KEY\n            ]);\n            socket.onopen = ()=>{\n                mediaRecorder.addEventListener(\"dataavailable\", async (event)=>{\n                    if (event.data.size > 0 && socket.readyState == 1) {\n                        socket.send(event.data);\n                    }\n                });\n            };\n            n;\n            mediaRecorder.start(1100);\n            console.log(\"started\");\n            socket.onmessage = async (message)=>{\n                const received = JSON.parse(message.data);\n                if (received.channel && received.channel.alternatives && received.channel.alternatives.length > 0) {\n                    const transcript = received.channel.alternatives[0].transcript;\n                    if (transcript && received.is_final) {\n                        currentText = currentText.concat(\" \" + transcript);\n                        audioText = currentText;\n                        console.log(audioText);\n                        setText(audioText);\n                    }\n                }\n            };\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (record) {\n            deepGramAudio2text();\n        }\n    }, [\n        record\n    ]);\n    let leters = text.split(\" \");\n    let last2 = leters.slice(-2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"homePage\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://deepgram.com\",\n                        target: \"_blank\",\n                        children: \"Deepgram AI \\uD83E\\uDD16\"\n                    }, void 0, false, {\n                        fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: animation ? \"block\" : \"none\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"rotatingText-adjective hide\",\n                                children: leters.slice(-14, -7).map((i)=>i + \" \")\n                            }, void 0, false, {\n                                fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"rotatingText-adjective show\",\n                                children: leters.slice(-7).map((i)=>i + \" \")\n                            }, void 0, false, {\n                                fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: leters.slice(-14, -7).map((i)=>i + \" \")\n                            }, void 0, false, {\n                                fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    marginTop: \"5px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: leters.slice(-7, -2).map((i)=>i + \" \")\n                                    }, void 0, false, {\n                                        fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \"\\xa0#\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startRec,\n                        type: \"button\",\n                        id: \"start\",\n                        children: \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: stopRec,\n                        type: \"button\",\n                        id: \"stop\",\n                        children: \"Stop\"\n                    }, void 0, false, {\n                        fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"click \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#start\",\n                                children: \"start\"\n                            }, void 0, false, {\n                                fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                                lineNumber: 126,\n                                columnNumber: 17\n                            }, undefined),\n                            \" button speak, wait, finaly click\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#stop\",\n                                children: \"stop\"\n                            }, void 0, false, {\n                                fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, undefined),\n                            \" button\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            onClick: ()=>setCc((state)=>!state),\n                            children: cc ? \"hide cc\" : \"show cc\"\n                        }, void 0, false, {\n                            fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            onClick: ()=>setAnimation((state)=>!state),\n                            children: cc ? \"hide animation\" : \"show animation\"\n                        }, void 0, false, {\n                            fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"textarea\",\n                type: \"text\",\n                value: text,\n                readOnly: true,\n                style: {\n                    display: cc ? \"block\" : \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kennedy/Desktop/tue/components/Long.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Long, \"JgBvHaL/39KqYMu35y/h/DNwASA=\");\n_c = Long;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Long);\nvar _c;\n$RefreshReg$(_c, \"Long\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSS9CLDhEQUFDa0U7Z0JBQ0NkLFdBQVU7Z0JBQ1ZZLE1BQUs7Z0JBQ0xHLE9BQU9yRTtnQkFDUHNFLFFBQVE7Z0JBQ1JaLE9BQU87b0JBQUVDLFNBQVN6RCxLQUFLLFVBQVU7Z0JBQU87Ozs7Ozs7Ozs7OztBQUloRDtHQXpJTU47S0FBQUE7QUE0SU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb25nLmpzPzhkYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxudmFyIG1lZGlhUmVjb3JkZXI7IFxudmFyIGF1ZGlvVGV4dDtcbi8vIGNvbnN0IERHX0tFWSA9IGNvbmZpZy5ER19LRVk7XG5jb25zdCBER19LRVkgPSBwcm9jZXNzLmVudi5ER19LRVk7XG5cblxuXG5cbmNvbnN0IExvbmcgPSAoKSA9PiB7XG4gIFxuICBsZXQgY3VycmVudFRleHQgPSAnJzsgLy8gaWYgeW91IHdhbnQgcmVjb3JkIGFsbCBhdWRpbyBldmVuIGlmIHlvdSBzdG9wZWQgYW5kIHJlc3RhcnQgTWVkaWFSZWNvcmRlciwgc28geW91IHNob3VsZCBzZXQgaXQgYXMgYSBnbG9iYWwgdmFyaWFibGVcblxuICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjYywgc2V0Q2NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cblxuXG5cbiAgY29uc3Qgc3RhcnRSZWMgPSAoKSA9PiB7XG4gICAgc2V0UmVjb3JkKHRydWUpO1xuICAgIHNldFRleHQoJycpO1xuICB9O1xuXG4gIGNvbnN0IHN0b3BSZWMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHJlY29yZCAmJiBtZWRpYVJlY29yZGVyICYmIG1lZGlhUmVjb3JkZXIuc3RhdGUgIT09ICdpbmFjdGl2ZScpIHtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgbWVkaWFSZWNvcmRlci5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgIH1cbiAgICBzZXRSZWNvcmQoZmFsc2UpO1xuICB9O1xuICBcblxuICBjb25zdCBkZWVwR3JhbUF1ZGlvMnRleHQgPSAoKSA9PiB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KS50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQoJ2F1ZGlvL3dlYm0nKSkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ0Jyb3dzZXIgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3B0aW9ucyA9IHsgbWltZVR5cGU6ICd2aWRlby93ZWJtJyB9O1xuICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSwgb3B0aW9ucyk7XG5cbiAgICAgIGNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYHdzczovL2FwaS5kZWVwZ3JhbS5jb20vdjEvbGlzdGVuYCwgW1xuICAgICAgICAndG9rZW4nLFxuICAgICAgICBER19LRVksXG4gICAgICBdKTtcblxuICAgICAgc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKCdkYXRhYXZhaWxhYmxlJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc2l6ZSA+IDAgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgc29ja2V0LnNlbmQoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIG5cbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoMTEwMCk7XG4gICAgICBjb25zb2xlLmxvZygnc3RhcnRlZCcpO1xuXG4gICAgICBzb2NrZXQub25tZXNzYWdlID0gYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgcmVjZWl2ZWQgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGlmIChyZWNlaXZlZC5jaGFubmVsICYmIHJlY2VpdmVkLmNoYW5uZWwuYWx0ZXJuYXRpdmVzICYmIHJlY2VpdmVkLmNoYW5uZWwuYWx0ZXJuYXRpdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB0cmFuc2NyaXB0ID0gcmVjZWl2ZWQuY2hhbm5lbC5hbHRlcm5hdGl2ZXNbMF0udHJhbnNjcmlwdDtcbiAgICAgICAgICBpZiAodHJhbnNjcmlwdCAmJiByZWNlaXZlZC5pc19maW5hbCkge1xuICAgICAgICAgICAgY3VycmVudFRleHQgPSBjdXJyZW50VGV4dC5jb25jYXQoJyAnICsgdHJhbnNjcmlwdCk7XG4gICAgICAgICAgICBhdWRpb1RleHQgPSBjdXJyZW50VGV4dDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF1ZGlvVGV4dCk7XG4gICAgICAgICAgICBzZXRUZXh0KGF1ZGlvVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgXG4gICAgfVxuICAgIFxuICAgICk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVjb3JkKSB7XG4gICAgICBkZWVwR3JhbUF1ZGlvMnRleHQoKTtcbiAgICB9XG4gIH0sIFtyZWNvcmRdKTtcblxuICBsZXQgbGV0ZXJzID0gdGV4dC5zcGxpdCgnICcpO1xuICBsZXQgbGFzdDIgPSBsZXRlcnMuc2xpY2UoLTIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lUGFnZSc+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZGVlcGdyYW0uY29tJyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgRGVlcGdyYW0gQUkg8J+kllxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBhbmltYXRpb24gPyAnYmxvY2snIDogJ25vbmUnIH19PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHJvdGF0aW5nVGV4dC1hZGplY3RpdmUgaGlkZWB9PlxuICAgICAgICAgICAge2xldGVycy5zbGljZSgtMTQsIC03KS5tYXAoKGkpID0+IGkgKyAnICcpfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2Byb3RhdGluZ1RleHQtYWRqZWN0aXZlIHNob3dgfT5cbiAgICAgICAgICAgIHtsZXRlcnMuc2xpY2UoLTcpLm1hcCgoaSkgPT4gaSArICcgJyl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPntsZXRlcnMuc2xpY2UoLTE0LCAtNykubWFwKChpKSA9PiBpICsgJyAnKX08L3A+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogJzVweCcgfX0+XG4gICAgICAgICAgICA8cD57bGV0ZXJzLnNsaWNlKC03LCAtMikubWFwKChpKSA9PiBpICsgJyAnKX08L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgJm5ic3A7I1xuICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydFJlY30gdHlwZT0nYnV0dG9uJyBpZD0nc3RhcnQnPlxuICAgICAgICAgIFN0YXJ0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0b3BSZWN9IHR5cGU9J2J1dHRvbicgaWQ9J3N0b3AnPlxuICAgICAgICAgIFN0b3BcbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgY2xpY2sgPGEgaHJlZj0nI3N0YXJ0Jz5zdGFydDwvYT4gYnV0dG9uIHNwZWFrLCB3YWl0LCBmaW5hbHkgY2xpY2t7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9JyNzdG9wJz5zdG9wPC9hPiBidXR0b25cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRDYygoc3RhdGUpID0+ICFzdGF0ZSl9PlxuICAgICAgICAgICAge2NjID8gJ2hpZGUgY2MnIDogJ3Nob3cgY2MnfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRBbmltYXRpb24oKHN0YXRlKSA9PiAhc3RhdGUpfT5cbiAgICAgICAgICAgIHtjYyA/ICdoaWRlIGFuaW1hdGlvbicgOiAnc2hvdyBhbmltYXRpb24nfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0YXJlYSdcbiAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgIHJlYWRPbmx5XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGNjID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9uZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29uZmlnIiwibWVkaWFSZWNvcmRlciIsImF1ZGlvVGV4dCIsIkRHX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJMb25nIiwiY3VycmVudFRleHQiLCJyZWNvcmQiLCJzZXRSZWNvcmQiLCJ0ZXh0Iiwic2V0VGV4dCIsImNjIiwic2V0Q2MiLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJzdGFydFJlYyIsInN0b3BSZWMiLCJzdGF0ZSIsInN0b3AiLCJzdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJkZWVwR3JhbUF1ZGlvMnRleHQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRoZW4iLCJNZWRpYVJlY29yZGVyIiwiaXNUeXBlU3VwcG9ydGVkIiwiYWxlcnQiLCJvcHRpb25zIiwibWltZVR5cGUiLCJzb2NrZXQiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkYXRhIiwic2l6ZSIsInJlYWR5U3RhdGUiLCJzZW5kIiwibiIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJyZWNlaXZlZCIsIkpTT04iLCJwYXJzZSIsImNoYW5uZWwiLCJhbHRlcm5hdGl2ZXMiLCJsZW5ndGgiLCJ0cmFuc2NyaXB0IiwiaXNfZmluYWwiLCJjb25jYXQiLCJsZXRlcnMiLCJzcGxpdCIsImxhc3QyIiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsInRhcmdldCIsInN0eWxlIiwiZGlzcGxheSIsInAiLCJtYXAiLCJpIiwibWFyZ2luVG9wIiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiLCJpZCIsInRleHRhcmVhIiwidmFsdWUiLCJyZWFkT25seSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Long.js\n"));

/***/ })

});