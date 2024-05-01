!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(()=>(()=>{"use strict";var t={465:(t,e)=>{
/*
 * HSBasePlugin
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.el=t,this.options=e,this.events=n,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var n;t.push({id:(null===(n=null==e?void 0:e.el)||void 0===n?void 0:n.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=n},164:function(t,e,n){
/*
 * HSToggleCount
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
var o,i=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){function e(e,n){var o=t.call(this,e,n)||this,i=e.getAttribute("data-hs-toggle-count"),u=i?JSON.parse(i):{},l=r(r({},u),n);return o.target=(null==l?void 0:l.target)?"string"==typeof(null==l?void 0:l.target)?document.querySelector(l.target):l.target:null,o.min=(null==l?void 0:l.min)||0,o.max=(null==l?void 0:l.max)||0,o.duration=(null==l?void 0:l.duration)||700,o.isChecked=o.target.checked||!1,o.target&&o.init(),o}return i(e,t),e.prototype.init=function(){var t=this;this.createCollection(window.$hsToggleCountCollection,this),this.isChecked&&(this.el.innerText=String(this.max)),this.target.addEventListener("change",(function(){t.isChecked=!t.isChecked,t.toggle()}))},e.prototype.toggle=function(){this.isChecked?this.countUp():this.countDown()},e.prototype.animate=function(t,e){var n=this,o=0,i=function(r){o||(o=r);var u=Math.min((r-o)/n.duration,1);n.el.innerText=String(Math.floor(u*(e-t)+t)),u<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)},e.prototype.countUp=function(){this.animate(this.min,this.max)},e.prototype.countDown=function(){this.animate(this.max,this.min)},e.getInstance=function(t,e){var n=window.$hsToggleCountCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return n?e?n:n.element:null},e.autoInit=function(){window.$hsToggleCountCollection||(window.$hsToggleCountCollection=[]),document.querySelectorAll("[data-hs-toggle-count]:not(.--prevent-on-load-init)").forEach((function(t){window.$hsToggleCountCollection.find((function(e){var n;return(null===(n=null==e?void 0:e.element)||void 0===n?void 0:n.el)===t}))||new e(t)}))},e}(n(465).default);window.addEventListener("load",(function(){u.autoInit()})),"undefined"!=typeof window&&(window.HSToggleCount=u),e.default=u}},e={};var n=function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}(164);return n})()));