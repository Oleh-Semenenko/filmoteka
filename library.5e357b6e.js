!function(){var e={spinner:document.querySelector(".js-spinner"),load:document.querySelector("[data-load]"),watchedBtn:document.querySelector('[data-action="watched"]'),queueBtn:document.querySelector('[data-action="queue"]'),moviesList:document.querySelector(".movie__list"),modalEl:document.querySelector(".modal"),headerSearcherEl:document.querySelector(".header__searcher"),searchFormEl:document.querySelector(".header__form"),headerBtn:document.querySelector(".header__list-btn"),headerNav:document.querySelector(".header__nav"),body:document.querySelector("body")},t=e.queueBtn,r=e.watchedBtn;function a(e,t,r){e.classList.add(r),t.classList.remove(r)}e.headerBtn.addEventListener("click",(function(e){switch(e.target.dataset.action){case"watched":a(r,t,"header__item-btn--active");break;case"queue":a(t,r,"header__item-btn--active")}}))}();
//# sourceMappingURL=library.5e357b6e.js.map