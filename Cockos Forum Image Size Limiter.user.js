// ==UserScript==
// @name         Cockos Forum Image Size Limiter
// @namespace    http://github.com/yellowmix/tampermonkey
// @version      0.1
// @description  Limits the width of user-posted images to fit width of post
// @author       yellowmix
// @match        https://forum.cockos.com/showthread.php*
// @grant        none
// ==/UserScript==

'use strict';

var imgStyle = document.createElement('style');
imgStyle.innerText = `td:nth-of-type(2) > div:nth-of-type(2) img {
    max-width: 100%;
  }';`
document.head.appendChild(imgStyle);