!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a.register("1zsvp",(function(e,t){var n=a("4Nugj"),i=new(0,a("gR1P7").default)({url:"https://api.themoviedb.org/3/movie",params:{api_key:"f23afa13cf10e0a13fa8c4a5195ece8b"}}),o=localStorage.getItem("Watched"),c=JSON.parse(o),r=localStorage.getItem("Queue"),s=JSON.parse(r);if(o&&0!==c.length){{function l(){try{var e=c.reduce((function(e,t){i.url="https://api.themoviedb.org/3/movie/".concat(t);var n=i.fetchMovies();return e.push(n),e}),[]);Promise.all(e).then((function(e){n.refs.moviesList.innerHTML=d(e)})).catch((function(e){return console.log(e)}))}catch(e){console.log(e)}}n.refs.watchedBtn.addEventListener("click",l),l()}if(r&&0!==c.length){n.refs.queueBtn.addEventListener("click",(function(){try{var e=s.reduce((function(e,t){i.url="https://api.themoviedb.org/3/movie/".concat(t);var n=i.fetchMovies();return e.push(n),e}),[]);Promise.all(e).then((function(e){n.refs.moviesList.innerHTML=d(e)})).catch((function(e){return console.log(e)}))}catch(e){console.log(e)}}))}}function d(e){return e.map((function(e){var t=e.poster_path,n=e.original_title,a=e.release_date,i=e.genres,o=e.id,c=e.vote_average;return console.log(i),'\n      <li class="movie__item" data-id="'.concat(o,'">\n  <a class="movie__link" data-id="').concat(o,'" href="">\n  <img src="https://image.tmdb.org/t/p/w342').concat(t,'" class="movie__image" data-id="').concat(o,'" alt="Poster movie ').concat(n,'"  width="" height="" />\n    <div class="movie__description" data-id="').concat(o,'">\n      <p class="movie__title" data-id="').concat(o,'">').concat(n,'</p>\n      <p class="movie__info" data-id="').concat(o,'">').concat(i.map((function(e){return e.name})).join(", "),'  \n      <span class="movie__breacker" data-id="').concat(o,'"> | </span>\n    <span class="movie__year" data-id="').concat(o,'">').concat(a.split("-").slice(0,1).join(""),'</span><span class="movie__rating">').concat(c,"</span></p>\n    </div>\n  </a>\n</li>")})).join("")}})),a("4Nugj"),a("j1lrD"),a("gR1P7"),a("f33mO"),a("fYmpR"),a("ghI91"),a("1zsvp");var i=a("4Nugj"),o=i.refs.headerBtn,c=i.refs.queueBtn,r=i.refs.watchedBtn;function s(e,t,n){e.classList.add(n),t.classList.remove(n)}o.addEventListener("click",(function(e){switch(e.target.dataset.action){case"watched":s(r,c,"header__item-btn--active");break;case"queue":s(c,r,"header__item-btn--active")}}))}();
//# sourceMappingURL=library.5d029340.js.map
