// ==UserScript==
// @name         Reddit username links to old Reddit
// @namespace    http://github.com/yellowmix/tampermonkey
// @version      0.1
// @description  Make username links go to old Reddit view
// @author       You
// @match        https://www.reddit.com
// @match        https://www.reddit.com/r/*
// @grant        none
// ==/UserScript==

let links = document.getElementsByTagName("a");
const TESTREGEX = /https:\/\/(?!old)\w+\.reddit\.com\/user\/\w/
const USERPATHREGEX = /\/user\/\w+\//
for (let i = 0; i < links.length; i++) {
  if (TESTREGEX.test(links[i].href) == true) {
    links[i].href = "https://old.reddit.com"
                  + links[i].href.match(USERPATHREGEX)
  }
}