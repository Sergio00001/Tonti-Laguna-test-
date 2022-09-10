(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const taxToggle = () => {
        const toggleBtns = document.querySelectorAll(".header__btn");
        const monthPrice = document.querySelectorAll(".month__price");
        const yearPrice = document.querySelectorAll(".year__price");
        toggleBtns.forEach((btn => {
            btn.addEventListener("click", (e => {
                toggleBtns.forEach((active => {
                    active.classList.remove("active");
                }));
                btn.classList.add("active");
                monthPrice.forEach((monthTag => {
                    if ("YEARLY" === e.target.textContent) {
                        monthTag.style.display = "none";
                        yearPrice.forEach((yearTag => {
                            yearTag.style.display = "block";
                        }));
                    } else {
                        monthTag.style.display = "block";
                        yearPrice.forEach((yearTag => {
                            yearTag.style.display = "none";
                        }));
                    }
                }));
            }));
        }));
    };
    taxToggle();
    window["FLS"] = true;
    isWebp();
})();