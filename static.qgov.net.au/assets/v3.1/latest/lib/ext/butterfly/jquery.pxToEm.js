/*! SWE 3.1.9 2019113T1545 */
!function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){Number.prototype.pxToEm=String.prototype.pxToEm=function(e){e=jQuery.extend({scope:"body",reverse:!1},e);var t,r=""==this?0:parseFloat(this),o=function(){var e=document.documentElement;return self.innerWidth||e&&e.clientWidth||document.body.clientWidth};if("body"==e.scope&&jQuery.browser.msie&&(parseFloat(jQuery("body").css("font-size"))/o()).toFixed(1)>0){t=function(){return 16*(parseFloat(jQuery("body").css("font-size"))/o()).toFixed(3)}()}else t=parseFloat(jQuery(e.scope).css("font-size"));return 1==e.reverse?(r*t).toFixed(2)+"px":(r/t).toFixed(2)+"em"}}]);