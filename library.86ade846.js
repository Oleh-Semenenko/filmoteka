var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=i),i.register("f33Wg",(function(e,t){var a=i("krGWQ");const n=new(0,i("ezibT").default)({url:"https://api.themoviedb.org/3/movie",params:{api_key:"f23afa13cf10e0a13fa8c4a5195ece8b"}}),o=localStorage.getItem("Watched"),s=JSON.parse(o),r=localStorage.getItem("Queue"),c=JSON.parse(r);if(o&&0!==s.length){{function l(){try{const e=s.reduce(((e,t)=>{n.url=`https://api.themoviedb.org/3/movie/${t}`;const a=n.fetchMovies();return e.push(a),e}),[]);Promise.all(e).then((e=>{a.refs.moviesList.innerHTML=d(e)})).catch((e=>console.log(e)))}catch(e){console.log(e)}}a.refs.watchedBtn.addEventListener("click",l),l()}if(r&&0!==s.length){a.refs.queueBtn.addEventListener("click",(function(){try{const e=c.reduce(((e,t)=>{n.url=`https://api.themoviedb.org/3/movie/${t}`;const a=n.fetchMovies();return e.push(a),e}),[]);Promise.all(e).then((e=>{a.refs.moviesList.innerHTML=d(e)})).catch((e=>console.log(e)))}catch(e){console.log(e)}}))}}function d(e){return e.map((({poster_path:e,original_title:t,release_date:a,genres:i,id:n,vote_average:o})=>(console.log(i),`\n      <li class="movie__item" data-id="${n}">\n  <a class="movie__link" data-id="${n}" href="">\n  <img src="https://image.tmdb.org/t/p/w342${e}" class="movie__image" data-id="${n}" alt="Poster movie ${t}"  width="" height="" />\n    <div class="movie__description" data-id="${n}">\n      <p class="movie__title" data-id="${n}">${t}</p>\n      <p class="movie__info" data-id="${n}">${i.map((e=>e.name)).join(", ")}  \n      <span class="movie__breacker" data-id="${n}"> | </span>\n    <span class="movie__year" data-id="${n}">${a.split("-").slice(0,1).join("")}</span><span class="movie__rating">${o}</span></p>\n    </div>\n  </a>\n</li>`))).join("")}})),i("krGWQ"),i("04jNI"),i("ezibT"),i("eSgc6"),i("gBTsr"),i("h53OD"),i("f33Wg");var n=i("krGWQ");const{headerBtn:o,queueBtn:s,watchedBtn:r}=n.refs;function c(e,t,a){e.classList.add(a),t.classList.remove(a)}o.addEventListener("click",(function(e){switch(e.target.dataset.action){case"watched":c(r,s,"header__item-btn--active");break;case"queue":c(s,r,"header__item-btn--active")}}));
//# sourceMappingURL=library.86ade846.js.map
