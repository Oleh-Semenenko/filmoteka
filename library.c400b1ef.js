var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o.register("krGWQ",(function(e,t){var r,o,n,c;r=e.exports,o="refs",n=function(){return a},Object.defineProperty(r,o,{get:n,set:c,enumerable:!0,configurable:!0});const a={spinner:document.querySelector(".js-spinner"),swiper:document.querySelector(".js-slider"),load:document.querySelector("[data-load]"),watchedBtn:document.querySelector('[data-action="watched"]'),queueBtn:document.querySelector('[data-action="queue"]'),moviesList:document.querySelector(".movie__list"),modalEl:document.querySelector(".modal"),headerSearcherEl:document.querySelector(".header__searcher"),searchFormEl:document.querySelector(".header__form"),headerBtn:document.querySelector(".header__list-btn"),headerNav:document.querySelector(".header__nav"),body:document.querySelector("body"),searchNotification:document.querySelector("#search-notification")}}));var n=o("krGWQ");const{headerBtn:c,queueBtn:a,watchedBtn:d}=n.refs;function i(e,t,r){e.classList.add(r),t.classList.remove(r)}c.addEventListener("click",(function(e){switch(e.target.dataset.action){case"watched":i(d,a,"header__item-btn--active");break;case"queue":i(a,d,"header__item-btn--active")}}));
//# sourceMappingURL=library.c400b1ef.js.map