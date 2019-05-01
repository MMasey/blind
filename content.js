// content.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {

            var blindEl = document.querySelector("#blindElement");

            if(blindEl) {
                document.body.removeChild(blindEl);
                document.body.style.filter = "";

                console.log("Blind mode disabled");
            } else {
                var blindEl = document.createElement("span");
                blindEl.id = "blindElement";
                blindEl.setAttribute("style", "position: fixed; top: 0; right: 0; bottom: 0; left: 0; display: block; background-color: rgba(255,255,255,0.9); z-index: 99999999; pointer-events: none");
                document.body.appendChild(blindEl);
                document.body.style.filter = "blur(7px)";

                console.log("Blind mode enabled");
            }
        }
    }
);