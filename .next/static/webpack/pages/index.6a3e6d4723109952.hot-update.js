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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// import React, { useEffect, useState } from 'react';\n// import config from './config';\n// var mediaRecorder; \n// var audioText;\n// // const DG_KEY = config.DG_KEY;\n// const DG_KEY = process.env.DG_KEY;\n// const Long = () => {\n//   let currentText = ''; // if you want record all audio even if you stoped and restart MediaRecorder, so you should set it as a global variable\n//   const [record, setRecord] = useState(false);\n//   const [text, setText] = useState('');\n//   const [cc, setCc] = useState(false);\n//   const [animation, setAnimation] = useState(false);\n//   const startRec = () => {\n//     setRecord(true);\n//     setText('');\n//   };\n//   const stopRec = async () => {\n//     if (record && mediaRecorder && mediaRecorder.state !== 'inactive') {\n//       mediaRecorder.stop();\n//       mediaRecorder.stream.getTracks().forEach(track => track.stop());\n//     }\n//     setRecord(false);\n//   };\n//   const deepGramAudio2text = () => {\n//     navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {\n//       if (!MediaRecorder.isTypeSupported('audio/webm')) {\n//         return alert('Browser not supported');\n//       }\n//       var options = { mimeType: 'video/webm' };\n//       mediaRecorder = new MediaRecorder(stream, options);\n//       const socket = new WebSocket(`wss://api.deepgram.com/v1/listen`, [\n//         'token',\n//         DG_KEY,\n//       ]);\n//       socket.onopen = () => {\n//         mediaRecorder.addEventListener('dataavailable', async (event) => {\n//           if (event.data.size > 0 && socket.readyState == 1) {\n//             socket.send(event.data);\n//           }\n//         });\n//       };\n//       mediaRecorder.start(1100);\n//       console.log('started');\n//       socket.onmessage = async (message) => {\n//         const received = JSON.parse(message.data);\n//         if (received.channel && received.channel.alternatives && received.channel.alternatives.length > 0) {\n//           const transcript = received.channel.alternatives[0].transcript;\n//           if (transcript && received.is_final) {\n//             currentText = currentText.concat(' ' + transcript);\n//             audioText = currentText;\n//             console.log(audioText);\n//             setText(audioText);\n//           }\n//         }\n//       };\n//     }\n//     );\n//   };\n//   useEffect(() => {\n//     if (record) {\n//       deepGramAudio2text();\n//     }\n//   }, [record]);\n//   let leters = text.split(' ');\n//   let last2 = leters.slice(-2);\n//   return (\n//     <div>\n//       <div className='homePage'>\n//         <a href='https://deepgram.com' target='_blank'>\n//           Deepgram AI 🤖\n//         </a>\n//         <div style={{ display: animation ? 'block' : 'none' }}>\n//           <p className={`rotatingText-adjective hide`}>\n//             {leters.slice(-14, -7).map((i) => i + ' ')}\n//           </p>\n//           <p className={`rotatingText-adjective show`}>\n//             {leters.slice(-7).map((i) => i + ' ')}\n//           </p>\n//         </div>\n//         <div>\n//           <p>{leters.slice(-14, -7).map((i) => i + ' ')}</p>\n//           <div style={{ display: 'flex', marginTop: '5px' }}>\n//             <p>{leters.slice(-7, -2).map((i) => i + ' ')}</p>\n//               &nbsp;#\n//           </div>\n//         </div>\n//         <button onClick={startRec} type='button' id='start'>\n//           Start\n//         </button>\n//         <button onClick={stopRec} type='button' id='stop'>\n//           Stop\n//         </button>\n//         <p>\n//           click <a href='#start'>start</a> button speak, wait, finaly click{' '}\n//           <a href='#stop'>stop</a> button\n//         </p>\n//         <p>\n//           <a onClick={() => setCc((state) => !state)}>\n//             {cc ? 'hide cc' : 'show cc'}\n//           </a>\n//         </p>\n//         <p>\n//           <a onClick={() => setAnimation((state) => !state)}>\n//             {cc ? 'hide animation' : 'show animation'}\n//           </a>\n//         </p>\n//       </div>\n//       <textarea\n//         className='textarea'\n//         type='text'\n//         value={text}\n//         readOnly\n//         style={{ display: cc ? 'block' : 'none' }}\n//       />\n//     </div>\n//   );\n// };\n// export default Long;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvbmcuanMiLCJtYXBwaW5ncyI6IkFBQUEsc0RBQXNEO0FBQ3RELGlDQUFpQztBQUVqQyxzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLG1DQUFtQztBQUNuQyxxQ0FBcUM7QUFLckMsdUJBQXVCO0FBRXZCLGtKQUFrSjtBQUVsSixpREFBaUQ7QUFDakQsMENBQTBDO0FBQzFDLHlDQUF5QztBQUN6Qyx1REFBdUQ7QUFNdkQsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsT0FBTztBQUVQLGtDQUFrQztBQUNsQywyRUFBMkU7QUFDM0UsOEJBQThCO0FBQzlCLHlFQUF5RTtBQUN6RSxRQUFRO0FBQ1Isd0JBQXdCO0FBQ3hCLE9BQU87QUFHUCx1Q0FBdUM7QUFDdkMsOEVBQThFO0FBQzlFLDREQUE0RDtBQUM1RCxpREFBaUQ7QUFDakQsVUFBVTtBQUVWLGtEQUFrRDtBQUNsRCw0REFBNEQ7QUFFNUQsMkVBQTJFO0FBQzNFLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsWUFBWTtBQUVaLGdDQUFnQztBQUNoQyw2RUFBNkU7QUFDN0UsaUVBQWlFO0FBQ2pFLHVDQUF1QztBQUN2QyxjQUFjO0FBQ2QsY0FBYztBQUNkLFdBQVc7QUFHWCxtQ0FBbUM7QUFDbkMsZ0NBQWdDO0FBRWhDLGdEQUFnRDtBQUNoRCxxREFBcUQ7QUFDckQsK0dBQStHO0FBQy9HLDRFQUE0RTtBQUM1RSxtREFBbUQ7QUFDbkQsa0VBQWtFO0FBQ2xFLHVDQUF1QztBQUN2QyxzQ0FBc0M7QUFDdEMsa0NBQWtDO0FBQ2xDLGNBQWM7QUFDZCxZQUFZO0FBQ1osV0FBVztBQUVYLFFBQVE7QUFFUixTQUFTO0FBQ1QsT0FBTztBQUVQLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIsOEJBQThCO0FBQzlCLFFBQVE7QUFDUixrQkFBa0I7QUFFbEIsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUVsQyxhQUFhO0FBQ2IsWUFBWTtBQUNaLG1DQUFtQztBQUNuQywwREFBMEQ7QUFDMUQsMkJBQTJCO0FBQzNCLGVBQWU7QUFFZixrRUFBa0U7QUFDbEUsMERBQTBEO0FBQzFELDBEQUEwRDtBQUMxRCxpQkFBaUI7QUFDakIsMERBQTBEO0FBQzFELHFEQUFxRDtBQUNyRCxpQkFBaUI7QUFDakIsaUJBQWlCO0FBRWpCLGdCQUFnQjtBQUNoQiwrREFBK0Q7QUFDL0QsZ0VBQWdFO0FBQ2hFLGdFQUFnRTtBQUVoRSx3QkFBd0I7QUFFeEIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUVqQiwrREFBK0Q7QUFDL0Qsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQiw2REFBNkQ7QUFDN0QsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUVwQixjQUFjO0FBQ2QsbUZBQW1GO0FBQ25GLDRDQUE0QztBQUM1QyxlQUFlO0FBQ2YsY0FBYztBQUNkLHlEQUF5RDtBQUN6RCwyQ0FBMkM7QUFDM0MsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixjQUFjO0FBQ2QsZ0VBQWdFO0FBQ2hFLHlEQUF5RDtBQUN6RCxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsK0JBQStCO0FBQy9CLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLHFEQUFxRDtBQUNyRCxXQUFXO0FBQ1gsYUFBYTtBQUNiLE9BQU87QUFDUCxLQUFLO0FBR0wsdUJBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9uZy5qcz84ZGE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbi8vIHZhciBtZWRpYVJlY29yZGVyOyBcbi8vIHZhciBhdWRpb1RleHQ7XG4vLyAvLyBjb25zdCBER19LRVkgPSBjb25maWcuREdfS0VZO1xuLy8gY29uc3QgREdfS0VZID0gcHJvY2Vzcy5lbnYuREdfS0VZO1xuXG5cblxuXG4vLyBjb25zdCBMb25nID0gKCkgPT4ge1xuICBcbi8vICAgbGV0IGN1cnJlbnRUZXh0ID0gJyc7IC8vIGlmIHlvdSB3YW50IHJlY29yZCBhbGwgYXVkaW8gZXZlbiBpZiB5b3Ugc3RvcGVkIGFuZCByZXN0YXJ0IE1lZGlhUmVjb3JkZXIsIHNvIHlvdSBzaG91bGQgc2V0IGl0IGFzIGEgZ2xvYmFsIHZhcmlhYmxlXG5cbi8vICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xuLy8gICBjb25zdCBbY2MsIHNldENjXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgY29uc3QgW2FuaW1hdGlvbiwgc2V0QW5pbWF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG5cblxuXG4vLyAgIGNvbnN0IHN0YXJ0UmVjID0gKCkgPT4ge1xuLy8gICAgIHNldFJlY29yZCh0cnVlKTtcbi8vICAgICBzZXRUZXh0KCcnKTtcbi8vICAgfTtcblxuLy8gICBjb25zdCBzdG9wUmVjID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgIGlmIChyZWNvcmQgJiYgbWVkaWFSZWNvcmRlciAmJiBtZWRpYVJlY29yZGVyLnN0YXRlICE9PSAnaW5hY3RpdmUnKSB7XG4vLyAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcbi8vICAgICAgIG1lZGlhUmVjb3JkZXIuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcbi8vICAgICB9XG4vLyAgICAgc2V0UmVjb3JkKGZhbHNlKTtcbi8vICAgfTtcbiAgXG5cbi8vICAgY29uc3QgZGVlcEdyYW1BdWRpbzJ0ZXh0ID0gKCkgPT4ge1xuLy8gICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSkudGhlbigoc3RyZWFtKSA9PiB7XG4vLyAgICAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKCdhdWRpby93ZWJtJykpIHtcbi8vICAgICAgICAgcmV0dXJuIGFsZXJ0KCdCcm93c2VyIG5vdCBzdXBwb3J0ZWQnKTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgdmFyIG9wdGlvbnMgPSB7IG1pbWVUeXBlOiAndmlkZW8vd2VibScgfTtcbi8vICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0sIG9wdGlvbnMpO1xuXG4vLyAgICAgICBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3c3M6Ly9hcGkuZGVlcGdyYW0uY29tL3YxL2xpc3RlbmAsIFtcbi8vICAgICAgICAgJ3Rva2VuJyxcbi8vICAgICAgICAgREdfS0VZLFxuLy8gICAgICAgXSk7XG5cbi8vICAgICAgIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4vLyAgICAgICAgIG1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcignZGF0YWF2YWlsYWJsZScsIGFzeW5jIChldmVudCkgPT4ge1xuLy8gICAgICAgICAgIGlmIChldmVudC5kYXRhLnNpemUgPiAwICYmIHNvY2tldC5yZWFkeVN0YXRlID09IDEpIHtcbi8vICAgICAgICAgICAgIHNvY2tldC5zZW5kKGV2ZW50LmRhdGEpO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfSk7XG4vLyAgICAgICB9O1xuXG4gICAgICBcbi8vICAgICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoMTEwMCk7XG4vLyAgICAgICBjb25zb2xlLmxvZygnc3RhcnRlZCcpO1xuXG4vLyAgICAgICBzb2NrZXQub25tZXNzYWdlID0gYXN5bmMgKG1lc3NhZ2UpID0+IHtcbi8vICAgICAgICAgY29uc3QgcmVjZWl2ZWQgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XG4vLyAgICAgICAgIGlmIChyZWNlaXZlZC5jaGFubmVsICYmIHJlY2VpdmVkLmNoYW5uZWwuYWx0ZXJuYXRpdmVzICYmIHJlY2VpdmVkLmNoYW5uZWwuYWx0ZXJuYXRpdmVzLmxlbmd0aCA+IDApIHtcbi8vICAgICAgICAgICBjb25zdCB0cmFuc2NyaXB0ID0gcmVjZWl2ZWQuY2hhbm5lbC5hbHRlcm5hdGl2ZXNbMF0udHJhbnNjcmlwdDtcbi8vICAgICAgICAgICBpZiAodHJhbnNjcmlwdCAmJiByZWNlaXZlZC5pc19maW5hbCkge1xuLy8gICAgICAgICAgICAgY3VycmVudFRleHQgPSBjdXJyZW50VGV4dC5jb25jYXQoJyAnICsgdHJhbnNjcmlwdCk7XG4vLyAgICAgICAgICAgICBhdWRpb1RleHQgPSBjdXJyZW50VGV4dDtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF1ZGlvVGV4dCk7XG4vLyAgICAgICAgICAgICBzZXRUZXh0KGF1ZGlvVGV4dCk7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICB9O1xuICAgICAgXG4vLyAgICAgfVxuICAgIFxuLy8gICAgICk7XG4vLyAgIH07XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBpZiAocmVjb3JkKSB7XG4vLyAgICAgICBkZWVwR3JhbUF1ZGlvMnRleHQoKTtcbi8vICAgICB9XG4vLyAgIH0sIFtyZWNvcmRdKTtcblxuLy8gICBsZXQgbGV0ZXJzID0gdGV4dC5zcGxpdCgnICcpO1xuLy8gICBsZXQgbGFzdDIgPSBsZXRlcnMuc2xpY2UoLTIpO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lUGFnZSc+XG4vLyAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZGVlcGdyYW0uY29tJyB0YXJnZXQ9J19ibGFuayc+XG4vLyAgICAgICAgICAgRGVlcGdyYW0gQUkg8J+kllxuLy8gICAgICAgICA8L2E+XG5cbi8vICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBhbmltYXRpb24gPyAnYmxvY2snIDogJ25vbmUnIH19PlxuLy8gICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHJvdGF0aW5nVGV4dC1hZGplY3RpdmUgaGlkZWB9PlxuLy8gICAgICAgICAgICAge2xldGVycy5zbGljZSgtMTQsIC03KS5tYXAoKGkpID0+IGkgKyAnICcpfVxuLy8gICAgICAgICAgIDwvcD5cbi8vICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Byb3RhdGluZ1RleHQtYWRqZWN0aXZlIHNob3dgfT5cbi8vICAgICAgICAgICAgIHtsZXRlcnMuc2xpY2UoLTcpLm1hcCgoaSkgPT4gaSArICcgJyl9XG4vLyAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgIDxwPntsZXRlcnMuc2xpY2UoLTE0LCAtNykubWFwKChpKSA9PiBpICsgJyAnKX08L3A+XG4vLyAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogJzVweCcgfX0+XG4vLyAgICAgICAgICAgICA8cD57bGV0ZXJzLnNsaWNlKC03LCAtMikubWFwKChpKSA9PiBpICsgJyAnKX08L3A+XG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgJm5ic3A7I1xuICAgICAgICAgICBcbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydFJlY30gdHlwZT0nYnV0dG9uJyBpZD0nc3RhcnQnPlxuLy8gICAgICAgICAgIFN0YXJ0XG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0b3BSZWN9IHR5cGU9J2J1dHRvbicgaWQ9J3N0b3AnPlxuLy8gICAgICAgICAgIFN0b3Bcbi8vICAgICAgICAgPC9idXR0b24+XG5cbi8vICAgICAgICAgPHA+XG4vLyAgICAgICAgICAgY2xpY2sgPGEgaHJlZj0nI3N0YXJ0Jz5zdGFydDwvYT4gYnV0dG9uIHNwZWFrLCB3YWl0LCBmaW5hbHkgY2xpY2t7JyAnfVxuLy8gICAgICAgICAgIDxhIGhyZWY9JyNzdG9wJz5zdG9wPC9hPiBidXR0b25cbi8vICAgICAgICAgPC9wPlxuLy8gICAgICAgICA8cD5cbi8vICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRDYygoc3RhdGUpID0+ICFzdGF0ZSl9PlxuLy8gICAgICAgICAgICAge2NjID8gJ2hpZGUgY2MnIDogJ3Nob3cgY2MnfVxuLy8gICAgICAgICAgIDwvYT5cbi8vICAgICAgICAgPC9wPlxuLy8gICAgICAgICA8cD5cbi8vICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRBbmltYXRpb24oKHN0YXRlKSA9PiAhc3RhdGUpfT5cbi8vICAgICAgICAgICAgIHtjYyA/ICdoaWRlIGFuaW1hdGlvbicgOiAnc2hvdyBhbmltYXRpb24nfVxuLy8gICAgICAgICAgIDwvYT5cbi8vICAgICAgICAgPC9wPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8dGV4dGFyZWFcbi8vICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0YXJlYSdcbi8vICAgICAgICAgdHlwZT0ndGV4dCdcbi8vICAgICAgICAgdmFsdWU9e3RleHR9XG4vLyAgICAgICAgIHJlYWRPbmx5XG4vLyAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGNjID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuLy8gICAgICAgLz5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgTG9uZztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Long.js\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var _components_Long__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Long */ \"./components/Long.js\");\n/* harmony import */ var _components_Long__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Long__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Seasonal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Seasonal */ \"./components/Seasonal.js\");\n/* harmony import */ var _components_Getaways__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Getaways */ \"./components/Getaways.js\");\n/* harmony import */ var _components_Bush__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Bush */ \"./components/Bush.js\");\n/* harmony import */ var _components_International__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/International */ \"./components/International.js\");\n/* harmony import */ var _components_Beach__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Beach */ \"./components/Beach.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const { theme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const [hideButtons, setHideButtons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const parentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleScroll = (direction)=>{\n        const { current } = scrollRef;\n        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;\n        if (direction === \"left\") {\n            current.scrollLeft -= scrollAmount;\n        } else {\n            current.scrollLeft += scrollAmount;\n        }\n    };\n    // check if scrollRef container is overfilling its parentRef container\n    const isScrollable = ()=>{\n        const { current } = scrollRef;\n        const { current: parent } = parentRef;\n        if ((current === null || current === void 0 ? void 0 : current.scrollWidth) >= (parent === null || parent === void 0 ? void 0 : parent.offsetWidth)) return setHideButtons(false);\n        return setHideButtons(true);\n    };\n    // if window is resized\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isScrollable();\n        window.addEventListener(\"resize\", isScrollable);\n        return ()=>{\n            window.removeEventListener(\"resize\", isScrollable);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center sm:px-2 p-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full minmd:w-4/5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Long__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                    fileName: \"/home/kennedy/Desktop/tue/pages/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/kennedy/Desktop/tue/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/kennedy/Desktop/tue/pages/index.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/kennedy/Desktop/tue/pages/index.js\",\n        lineNumber: 56,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Home, \"GFp0dGTMRvOxcb6/012WpZEQ2fA=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFFekI7QUFDRDtBQUNRO0FBQ0E7QUFDUjtBQUNrQjtBQUNoQjtBQUl4QyxNQUFNVyxPQUFPOztJQUNYLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdSLHFEQUFRQTtJQUUxQixNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFHL0MsTUFBTWMsWUFBWWIsNkNBQU1BLENBQUM7SUFFekIsTUFBTWMsWUFBWWQsNkNBQU1BLENBQUM7SUFFekIsTUFBTWUsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHSjtRQUVwQixNQUFNSyxlQUFlQyxPQUFPQyxVQUFVLEdBQUcsT0FBTyxNQUFNO1FBRXRELElBQUlKLGNBQWMsUUFBUTtZQUN4QkMsUUFBUUksVUFBVSxJQUFJSDtRQUN4QixPQUFPO1lBQ0xELFFBQVFJLFVBQVUsSUFBSUg7UUFDeEI7SUFDRjtJQUVBLHNFQUFzRTtJQUN0RSxNQUFNSSxlQUFlO1FBQ25CLE1BQU0sRUFBRUwsT0FBTyxFQUFFLEdBQUdKO1FBQ3BCLE1BQU0sRUFBRUksU0FBU00sTUFBTSxFQUFFLEdBQUdUO1FBRTVCLElBQUlHLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU08sV0FBVyxNQUFJRCxtQkFBQUEsNkJBQUFBLE9BQVFFLFdBQVcsR0FBRSxPQUFPYixlQUFlO1FBQ3ZFLE9BQU9BLGVBQWU7SUFDeEI7SUFFQSx1QkFBdUI7SUFDdkJkLGdEQUFTQSxDQUFDO1FBQ1J3QjtRQUNBSCxPQUFPTyxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUVsQyxPQUFPO1lBQ0xILE9BQU9RLG1CQUFtQixDQUFDLFVBQVVMO1FBQ3ZDO0lBQ0Y7SUFHQSxxQkFDQSw4REFBQ007UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFFZiw0RUFBQ0Q7MEJBQ0QsNEVBQUN6Qix5REFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJYO0dBcEVNTTs7UUFDY1AsaURBQVFBOzs7S0FEdEJPO0FBc0VOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcbmltcG9ydCBMb25nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9uZyc7XG5pbXBvcnQgU2Vhc29uYWwgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFzb25hbCc7XG5pbXBvcnQgR2V0YXdheXMgZnJvbSAnLi4vY29tcG9uZW50cy9HZXRhd2F5cyc7XG5pbXBvcnQgQnVzaCBmcm9tICcuLi9jb21wb25lbnRzL0J1c2gnO1xuaW1wb3J0IEludGVybmF0aW9uYWwgZnJvbSAnLi4vY29tcG9uZW50cy9JbnRlcm5hdGlvbmFsJztcbmltcG9ydCBCZWFjaCBmcm9tICcuLi9jb21wb25lbnRzL0JlYWNoJztcblxuXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3QgW2hpZGVCdXR0b25zLCBzZXRIaWRlQnV0dG9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgcGFyZW50UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHNjcm9sbFJlZjtcblxuICAgIGNvbnN0IHNjcm9sbEFtb3VudCA9IHdpbmRvdy5pbm5lcldpZHRoID4gMTgwMCA/IDI3MCA6IDIxMDtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgY3VycmVudC5zY3JvbGxMZWZ0IC09IHNjcm9sbEFtb3VudDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudC5zY3JvbGxMZWZ0ICs9IHNjcm9sbEFtb3VudDtcbiAgICB9XG4gIH07XG5cbiAgLy8gY2hlY2sgaWYgc2Nyb2xsUmVmIGNvbnRhaW5lciBpcyBvdmVyZmlsbGluZyBpdHMgcGFyZW50UmVmIGNvbnRhaW5lclxuICBjb25zdCBpc1Njcm9sbGFibGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSBzY3JvbGxSZWY7XG4gICAgY29uc3QgeyBjdXJyZW50OiBwYXJlbnQgfSA9IHBhcmVudFJlZjtcblxuICAgIGlmIChjdXJyZW50Py5zY3JvbGxXaWR0aCA+PSBwYXJlbnQ/Lm9mZnNldFdpZHRoKSByZXR1cm4gc2V0SGlkZUJ1dHRvbnMoZmFsc2UpO1xuICAgIHJldHVybiBzZXRIaWRlQnV0dG9ucyh0cnVlKTtcbiAgfTtcblxuICAvLyBpZiB3aW5kb3cgaXMgcmVzaXplZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzU2Nyb2xsYWJsZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpc1Njcm9sbGFibGUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpc1Njcm9sbGFibGUpO1xuICAgIH07XG4gIH0pO1xuXG5cbiAgcmV0dXJuKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgc206cHgtMiBwLTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbm1kOnctNC81XCI+XG4gICAgXG4gICAgICA8ZGl2PlxuICAgICAgPExvbmcgLz5cbiAgICAgIHsvKiA8QmVhY2ggLz5cbiAgICAgIDxJbnRlcm5hdGlvbmFsIC8+XG4gICAgICA8QnVzaCAvPlxuICAgICAgPEdldGF3YXlzLz5cbiAgICAgIDxTZWFzb25hbCAvPiAqL31cbiAgICAgXG5cbiAgICAgICAgXG5cbjwvZGl2PlxuPC9kaXY+XG5cblxuXG4gICAgICA8L2Rpdj5cbiAgICBcblxuXG4gICAgICAgICAgICBcbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwidXNlVGhlbWUiLCJMb25nIiwiU2Vhc29uYWwiLCJHZXRhd2F5cyIsIkJ1c2giLCJJbnRlcm5hdGlvbmFsIiwiQmVhY2giLCJIb21lIiwidGhlbWUiLCJoaWRlQnV0dG9ucyIsInNldEhpZGVCdXR0b25zIiwic2Nyb2xsUmVmIiwicGFyZW50UmVmIiwiaGFuZGxlU2Nyb2xsIiwiZGlyZWN0aW9uIiwiY3VycmVudCIsInNjcm9sbEFtb3VudCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzY3JvbGxMZWZ0IiwiaXNTY3JvbGxhYmxlIiwicGFyZW50Iiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});