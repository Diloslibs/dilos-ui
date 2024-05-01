!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(()=>(()=>{"use strict";var t={465:(t,e)=>{
/*
 * HSBasePlugin
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.el=t,this.options=e,this.events=n,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var n;t.push({id:(null===(n=null==e?void 0:e.el)||void 0===n?void 0:n.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=n},446:function(t,e,n){
/*
 * HSCopyMarkup
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
var o,i=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s=n(116),a=function(t){function e(e,n){var o=t.call(this,e,n)||this,i=e.getAttribute("data-hs-copy-markup"),s=i?JSON.parse(i):{},a=r(r({},s),n);return o.targetSelector=(null==a?void 0:a.targetSelector)||null,o.wrapperSelector=(null==a?void 0:a.wrapperSelector)||null,o.limit=(null==a?void 0:a.limit)||null,o.items=[],o.targetSelector&&o.init(),o}return i(e,t),e.prototype.init=function(){var t=this;this.createCollection(window.$hsCopyMarkupCollection,this),this.setTarget(),this.setWrapper(),this.addPredefinedItems(),this.el.addEventListener("click",(function(){return t.copy()}))},e.prototype.copy=function(){if(this.limit&&this.items.length>=this.limit)return!1;this.el.hasAttribute("disabled")&&this.el.setAttribute("disabled","");var t=this.target.cloneNode(!0);this.addToItems(t),this.limit&&this.items.length>=this.limit&&this.el.setAttribute("disabled","disabled"),this.fireEvent("copy",t),(0,s.dispatch)("copy.hs.copyMarkup",t,t)},e.prototype.addPredefinedItems=function(){var t=this;Array.from(this.wrapper.children).filter((function(t){return!t.classList.contains("[--ignore-for-count]")})).forEach((function(e){t.addToItems(e)}))},e.prototype.setTarget=function(){var t="string"==typeof this.targetSelector?document.querySelector(this.targetSelector).cloneNode(!0):this.targetSelector.cloneNode(!0);t.removeAttribute("id"),this.target=t},e.prototype.setWrapper=function(){this.wrapper="string"==typeof this.wrapperSelector?document.querySelector(this.wrapperSelector):this.wrapperSelector},e.prototype.addToItems=function(t){var e=this,n=t.querySelector("[data-hs-copy-markup-delete-item]");this.wrapper?this.wrapper.append(t):this.el.before(t),n&&n.addEventListener("click",(function(){return e.delete(t)})),this.items.push(t)},e.prototype.delete=function(t){var e=this.items.indexOf(t);-1!==e&&this.items.splice(e,1),t.remove(),this.fireEvent("delete",t),(0,s.dispatch)("delete.hs.copyMarkup",t,t)},e.getInstance=function(t,e){var n=window.$hsCopyMarkupCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return n?e?n:n.element:null},e.autoInit=function(){window.$hsCopyMarkupCollection||(window.$hsCopyMarkupCollection=[]),document.querySelectorAll("[data-hs-copy-markup]:not(.--prevent-on-load-init)").forEach((function(t){if(!window.$hsCopyMarkupCollection.find((function(e){var n;return(null===(n=null==e?void 0:e.element)||void 0===n?void 0:n.el)===t}))){var n=t.getAttribute("data-hs-copy-markup"),o=n?JSON.parse(n):{};new e(t,o)}}))},e}(n(465).default);window.addEventListener("load",(function(){a.autoInit()})),"undefined"!=typeof window&&(window.HSCopyMarkup=a),e.default=a},116:function(t,e){var n=this;Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isFormElement=e.isParentOrElementHidden=e.isEnoughSpace=e.isIpadOS=e.isIOS=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0;e.stringToBoolean=function(t){return"true"===t};e.getClassProperty=function(t,e,n){return void 0===n&&(n=""),(window.getComputedStyle(t).getPropertyValue(e)||n).replace(" ","")};e.getClassPropertyAlt=function(t,e,n){void 0===n&&(n="");var o="";return t.classList.forEach((function(t){t.includes(e)&&(o=t)})),o.match(/:(.*)]/)?o.match(/:(.*)]/)[1]:n};e.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isEnoughSpace=function(t,e,n,o,i){void 0===n&&(n="auto"),void 0===o&&(o=10),void 0===i&&(i=null);var r=e.getBoundingClientRect(),s=i?i.getBoundingClientRect():null,a=window.innerHeight,l=s?r.top-s.top:r.top,u=(i?s.bottom:a)-r.bottom,c=t.clientHeight+o;return"bottom"===n?u>=c:"top"===n?l>=c:l>=c||u>=c};e.isFormElement=function(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement};var o=function(t){return!!t&&("none"===window.getComputedStyle(t).display||o(t.parentElement))};e.isParentOrElementHidden=o;e.debounce=function(t,e){var o;return void 0===e&&(e=200),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(o),o=setTimeout((function(){t.apply(n,i)}),e)}};e.dispatch=function(t,e,n){void 0===n&&(n=null);var o=new CustomEvent(t,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(o)};e.afterTransition=function(t,e){var n=function(){e(),t.removeEventListener("transitionend",n,!0)};window.getComputedStyle(t,null).getPropertyValue("transition")!==(navigator.userAgent.includes("Firefox")?"all":"all 0s ease 0s")?t.addEventListener("transitionend",n,!0):e()};e.htmlToElement=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=function(t,e,n,o){void 0===n&&(n=" "),void 0===o&&(o="add"),t.split(n).forEach((function(t){return"add"===o?e.classList.add(t):e.classList.remove(t)}))};e.menuSearchHistory={historyIndex:-1,addHistory:function(t){this.historyIndex=t},existsInHistory:function(t){return t>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},e={};var n=function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}(446);return n})()));