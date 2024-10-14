// ==UserScript==
// @name         S1 Redesign
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Makes the flag larger on S1 and removes the infobox
// @author       Seanat
// @match        https://www.nationstates.net/*page=deck*
// @icon         https://www.google.com/s2/favicons?domain=nationstates.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var s1Cards = document.getElementsByClassName("deckcard deckcard-season-1 ");

    for(var deckcard of s1Cards) {
        var flagElement = deckcard.getElementsByClassName("deckcard-flag")[0];
        flagElement.style.height = "180px";
        var descBoxElement = deckcard.getElementsByClassName("deckcard-desc")[0];
        descBoxElement.remove();
    }

})();
