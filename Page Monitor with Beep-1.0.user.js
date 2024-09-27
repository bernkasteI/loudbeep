// ==UserScript==
// @name         Page Monitor with Beep
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Refresh page and beep on updates
// @author       box
// @match        https://app.dataannotation.tech/workers/projects
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dataannotation.tech
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const audio = new Audio('https://raw.githubusercontent.com/bernkasteI/loudbeep/main/beep-01a.mp3');

     // Function to check for updates
    function checkForUpdates() {
        const bodyText = document.body.innerText;
        console.log(bodyText);
        if (bodyText.includes('Projects') || bodyText.includes('hr') || bodyText.includes('$') ) {
            audio.play();
        }
    }

    // Create a MutationObserver to watch for changes
    const observer = new MutationObserver(checkForUpdates);
    observer.observe(document.body, { childList: true, subtree: true });

    // Refresh the page every 2 minutes
    setInterval(() => {
        location.reload();
    }, 120000);

    // Initial check
    checkForUpdates();

})();
