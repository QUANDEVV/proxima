(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3558:function(e,t,n){e.exports=function(e){"use strict";var t=e&&"object"==typeof e&&"default"in e?e:{default:e};/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function o(e,t,n,i){return new(n||(n=Promise))(function(c,u){function s(e){try{l(i.next(e))}catch(e){u(e)}}function r(e){try{l(i.throw(e))}catch(e){u(e)}}function l(e){var t;e.done?c(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(s,r)}l((i=i.apply(e,t||[])).next())})}let i={};function a(e){let t=i[e];if(t)return t;let n=new Promise((t,n)=>{let c=document.createElement("script");c.src=e,c.async=!0;let a=()=>{t()},s=()=>{c.removeEventListener("load",a),c.removeEventListener("error",s),delete i[e],c.remove(),n(Error(`Unable to load script ${e}`))};c.addEventListener("load",a),c.addEventListener("error",s),document.body.appendChild(c)});return i[e]=n,n}let s=class s{constructor(e){this.handleClick=e=>o(this,void 0,void 0,function*(){let t=this.config;if(!t)throw Error("google-pay-button: Missing configuration");let n=this.createLoadPaymentDataRequest(t);try{if(t.onClick&&t.onClick(e),e.defaultPrevented)return;let i=yield this.client.loadPaymentData(n);t.onLoadPaymentData&&t.onLoadPaymentData(i)}catch(e){"CANCELED"===e.statusCode?t.onCancel&&t.onCancel(e):t.onError?t.onError(e):console.error(e)}}),this.options=e}getElement(){return this.element}isGooglePayLoaded(){var e,t;return"google"in(window||n.g)&&!!(null===(t=null===(e=null==google?void 0:google.payments)||void 0===e?void 0:e.api)||void 0===t?void 0:t.PaymentsClient)}mount(e){var t;return o(this,void 0,void 0,function*(){if(!this.isGooglePayLoaded())try{yield a("https://pay.google.com/gp/p/js/pay.js")}catch(e){return void((null===(t=this.config)||void 0===t?void 0:t.onError)?this.config.onError(e):console.error(e))}this.element=e,e&&(this.appendStyles(),this.config&&this.updateElement())})}unmount(){this.element=void 0}configure(e){let t;return this.config=e,this.oldInvalidationValues&&!this.isClientInvalidated(e)||(t=this.updateElement()),this.oldInvalidationValues=this.getInvalidationValues(e),null!=t?t:Promise.resolve()}createClientOptions(e){let t={environment:e.environment,merchantInfo:this.createMerchantInfo(e)};return(e.onPaymentDataChanged||e.onPaymentAuthorized)&&(t.paymentDataCallbacks={},e.onPaymentDataChanged&&(t.paymentDataCallbacks.onPaymentDataChanged=t=>e.onPaymentDataChanged(t)||{}),e.onPaymentAuthorized&&(t.paymentDataCallbacks.onPaymentAuthorized=t=>e.onPaymentAuthorized(t)||{})),t}createIsReadyToPayRequest(e){let t=e.paymentRequest;return{apiVersion:t.apiVersion,apiVersionMinor:t.apiVersionMinor,allowedPaymentMethods:t.allowedPaymentMethods,existingPaymentMethodRequired:e.existingPaymentMethodRequired}}createLoadPaymentDataRequest(e){return Object.assign(Object.assign({},e.paymentRequest),{merchantInfo:this.createMerchantInfo(e)})}createMerchantInfo(e){let t=Object.assign({},e.paymentRequest.merchantInfo);return t.softwareInfo||(t.softwareInfo={id:this.options.softwareInfoId,version:this.options.softwareInfoVersion}),t}isMounted(){return null!=this.element&&!1!==this.element.isConnected}removeButton(){if(this.element instanceof ShadowRoot||this.element instanceof Element)for(let e of Array.from(this.element.children))"STYLE"!==e.tagName&&e.remove()}updateElement(){return o(this,void 0,void 0,function*(){if(!this.isMounted())return;let e=this.getElement();if(!this.config)throw Error("google-pay-button: Missing configuration");this.removeButton();try{this.client=new google.payments.api.PaymentsClient(this.createClientOptions(this.config))}catch(e){return void(this.config.onError?this.config.onError(e):console.error(e))}let t={buttonType:this.config.buttonType,buttonColor:this.config.buttonColor,buttonSizeMode:this.config.buttonSizeMode,buttonLocale:this.config.buttonLocale,onClick:this.handleClick,allowedPaymentMethods:this.config.paymentRequest.allowedPaymentMethods},n=e.getRootNode();n instanceof ShadowRoot&&(t.buttonRootNode=n);let i=this.client.createButton(t);this.setClassName(e,[e.className,"not-ready"]),e.appendChild(i);let c,u=!1;try{u=(c=yield this.client.isReadyToPay(this.createIsReadyToPayRequest(this.config))).result&&!this.config.existingPaymentMethodRequired||c.result&&c.paymentMethodPresent&&this.config.existingPaymentMethodRequired||!1}catch(e){this.config.onError?this.config.onError(e):console.error(e)}if(this.isMounted()){if(u){try{this.client.prefetchPaymentData(this.createLoadPaymentDataRequest(this.config))}catch(e){console.log("Error with prefetch",e)}this.setClassName(e,(e.className||"").split(" ").filter(e=>e&&"not-ready"!==e))}if((this.isReadyToPay!==(null==c?void 0:c.result)||this.paymentMethodPresent!==(null==c?void 0:c.paymentMethodPresent))&&(this.isReadyToPay=!!(null==c?void 0:c.result),this.paymentMethodPresent=null==c?void 0:c.paymentMethodPresent,this.config.onReadyToPayChange)){let e={isButtonVisible:u,isReadyToPay:this.isReadyToPay};this.paymentMethodPresent&&(e.paymentMethodPresent=this.paymentMethodPresent),this.config.onReadyToPayChange(e)}}})}setClassName(e,t){let n=t.filter(e=>e).join(" ");n?e.className=n:e.removeAttribute("class")}appendStyles(){var e,t,n;if("undefined"==typeof document)return;let i=null===(e=this.element)||void 0===e?void 0:e.getRootNode(),c=`default-google-style-${this.options.cssSelector.replace(/[^\w-]+/g,"")}-${null===(t=this.config)||void 0===t?void 0:t.buttonLocale}`;if(i&&!(null===(n=i.getElementById)||void 0===n?void 0:n.call(i,c))){let e=document.createElement("style");e.id=c,e.type="text/css",e.innerHTML=`
          ${this.options.cssSelector} {
            display: inline-block;
          }
          ${this.options.cssSelector}.not-ready {
            width: 0;
            height: 0;
            overflow: hidden;
          }
        `,i instanceof Document&&i.head?i.head.appendChild(e):i.appendChild(e)}}isClientInvalidated(e){return!this.oldInvalidationValues||this.getInvalidationValues(e).some((e,t)=>JSON.stringify(e)!==JSON.stringify(this.oldInvalidationValues[t]))}getInvalidationValues(e){var t,n;return[e.environment,e.existingPaymentMethodRequired,!!e.onPaymentDataChanged,!!e.onPaymentAuthorized,e.buttonColor,e.buttonType,e.buttonLocale,e.buttonSizeMode,e.paymentRequest.merchantInfo.merchantId,e.paymentRequest.merchantInfo.merchantName,null===(t=e.paymentRequest.merchantInfo.softwareInfo)||void 0===t?void 0:t.id,null===(n=e.paymentRequest.merchantInfo.softwareInfo)||void 0===n?void 0:n.version,e.paymentRequest.allowedPaymentMethods]}};let c="google-pay-button-container";let l=class l extends t.default.Component{constructor(){super(...arguments),this.manager=new s({cssSelector:`.${c}`,softwareInfoId:"@google-pay/button-react",softwareInfoVersion:"3.0.10"}),this.elementRef=t.default.createRef()}componentDidMount(){return o(this,void 0,void 0,function*(){let e=this.elementRef.current;e&&(yield this.manager.configure(this.props),yield this.manager.mount(e))})}componentWillUnmount(){this.manager.unmount()}componentDidUpdate(){this.manager.configure(this.props)}render(){return t.default.createElement("div",{ref:this.elementRef,className:[c,this.props.className].filter(e=>e).join(" "),style:this.props.style})}};return l}(n(7294))},3454:function(e,t,n){"use strict";var i,c;e.exports=(null==(i=n.g.process)?void 0:i.env)&&"object"==typeof(null==(c=n.g.process)?void 0:c.env)?n.g.process:n(7663)},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2113)}])},2113:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return pages}});var i,c,u=n(5893),d=n(7294),h=n(425),m=n(3454);let f=m.env.DG_KEY;var components_Long=()=>{let e="",[t,n]=(0,d.useState)(!1),[h,m]=(0,d.useState)(""),[p,y]=(0,d.useState)(!1),[g,v]=(0,d.useState)(!1),stopRec=async()=>{t&&i&&"inactive"!==i.state&&(i.stop(),i.stream.getTracks().forEach(e=>e.stop())),n(!1)},deepGramAudio2text=()=>{navigator.mediaDevices.getUserMedia({audio:!0}).then(t=>{if(!MediaRecorder.isTypeSupported("audio/webm"))return alert("Browser not supported");i=new MediaRecorder(t,{mimeType:"video/webm"});let n=new WebSocket("wss://api.deepgram.com/v1/listen",["token",f]);n.onopen=()=>{i.addEventListener("dataavailable",async e=>{e.data.size>0&&1==n.readyState&&n.send(e.data)})},i.start(1100),console.log("started"),n.onmessage=async t=>{let n=JSON.parse(t.data);if(n.channel&&n.channel.alternatives&&n.channel.alternatives.length>0){let t=n.channel.alternatives[0].transcript;t&&n.is_final&&(console.log(c=e=e.concat(" "+t)),m(c))}}})};(0,d.useEffect)(()=>{t&&deepGramAudio2text()},[t]);let w=h.split(" ");return w.slice(-2),(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"homePage",children:[(0,u.jsx)("a",{href:"https://deepgram.com",target:"_blank",children:"Deepgram AI \uD83E\uDD16"}),(0,u.jsxs)("div",{style:{display:g?"block":"none"},children:[(0,u.jsx)("p",{className:"rotatingText-adjective hide",children:w.slice(-14,-7).map(e=>e+" ")}),(0,u.jsx)("p",{className:"rotatingText-adjective show",children:w.slice(-7).map(e=>e+" ")})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:w.slice(-14,-7).map(e=>e+" ")}),(0,u.jsxs)("div",{style:{display:"flex",marginTop:"5px"},children:[(0,u.jsx)("p",{children:w.slice(-7,-2).map(e=>e+" ")}),"\xa0#"]})]}),(0,u.jsx)("button",{onClick:()=>{n(!0),m("")},type:"button",id:"start",children:"Start"}),(0,u.jsx)("button",{onClick:stopRec,type:"button",id:"stop",children:"Stop"}),(0,u.jsxs)("p",{children:["click ",(0,u.jsx)("a",{href:"#start",children:"start"})," button speak, wait, finaly click"," ",(0,u.jsx)("a",{href:"#stop",children:"stop"})," button"]}),(0,u.jsx)("p",{children:(0,u.jsx)("a",{onClick:()=>y(e=>!e),children:p?"hide cc":"show cc"})}),(0,u.jsx)("p",{children:(0,u.jsx)("a",{onClick:()=>v(e=>!e),children:p?"hide animation":"show animation"})})]}),(0,u.jsx)("textarea",{className:"textarea",type:"text",value:h,readOnly:!0,style:{display:p?"block":"none"}})]})};n(3558);var pages=()=>{let{theme:e}=(0,h.F)(),[t,n]=(0,d.useState)(!1),i=(0,d.useRef)(null),c=(0,d.useRef)(null),isScrollable=()=>{let{current:e}=i,{current:t}=c;return(null==e?void 0:e.scrollWidth)>=(null==t?void 0:t.offsetWidth)?n(!1):n(!0)};return(0,d.useEffect)(()=>(isScrollable(),window.addEventListener("resize",isScrollable),()=>{window.removeEventListener("resize",isScrollable)})),(0,u.jsx)("div",{className:"flex justify-center sm:px-2 p-2",children:(0,u.jsx)("div",{className:"w-full minmd:w-4/5",children:(0,u.jsx)("div",{children:(0,u.jsx)(components_Long,{})})})})}},7663:function(e){!function(){var t={229:function(e){var t,n,i,c=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var u=[],d=!1,h=-1;function cleanUpNextTick(){d&&i&&(d=!1,i.length?u=i.concat(u):h=-1,u.length&&drainQueue())}function drainQueue(){if(!d){var e=runTimeout(cleanUpNextTick);d=!0;for(var t=u.length;t;){for(i=u,u=[];++h<t;)i&&i[h].run();h=-1,t=u.length}i=null,d=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}c.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new Item(e,t)),1!==u.length||d||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=noop,c.addListener=noop,c.once=noop,c.off=noop,c.removeListener=noop,c.removeAllListeners=noop,c.emit=noop,c.prependListener=noop,c.prependOnceListener=noop,c.listeners=function(e){return[]},c.binding=function(e){throw Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw Error("process.chdir is not supported")},c.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var i=n[e];if(void 0!==i)return i.exports;var c=n[e]={exports:{}},u=!0;try{t[e](c,c.exports,__nccwpck_require__),u=!1}finally{u&&delete n[e]}return c.exports}__nccwpck_require__.ab="//";var i=__nccwpck_require__(229);e.exports=i}()}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);