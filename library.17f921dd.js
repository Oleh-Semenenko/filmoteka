function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequired7c6=a),a.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("f33Wg",(function(e,n){var i=a("krGWQ"),r=a("d6qMT"),o=a("ibf7D");const s=new(0,r.default)({url:"https://api.themoviedb.org/3/movie",params:{api_key:"f23afa13cf10e0a13fa8c4a5195ece8b"}}),c=localStorage.getItem("Watched"),l=JSON.parse(c),d=localStorage.getItem("Queue"),u=JSON.parse(d);if(c&&0!==l.length){{function f(){try{const e=l.reduce(((e,t)=>{s.url=`https://api.themoviedb.org/3/movie/${t}`;const n=s.fetchMovies();return e.push(n),e}),[]);Promise.all(e).then((e=>{i.refs.moviesList.innerHTML=p(e)})).catch((e=>console.log(e)))}catch(e){console.log(e)}}i.refs.watchedBtn.addEventListener("click",f),f()}if(d&&0!==l.length){i.refs.queueBtn.addEventListener("click",(function(){try{const e=u.reduce(((e,t)=>{s.url=`https://api.themoviedb.org/3/movie/${t}`;const n=s.fetchMovies();return e.push(n),e}),[]);Promise.all(e).then((e=>{i.refs.moviesList.innerHTML=p(e)})).catch((e=>console.log(e)))}catch(e){console.log(e)}}))}}function p(e){return e.map((({poster_path:e,original_title:n,release_date:i,genres:r,id:a,vote_average:s})=>(console.log(r),`\n      <li class="movie__item" data-id="${a}">\n  <a class="movie__link" data-id="${a}" href="">\n   ${e?`<img src="https://image.tmdb.org/t/p/w342${e}" class="movie__image" data-id="${a}" alt="Poster movie ${n}"  width="" height=""/>`:`<img\n       src="${t(o)}"\n        class="movie__image"\n        data-id="${a}"\n        alt="Poster movie ${n}"\n        width=""\n        height=""\n      />`}\n    <div class="movie__description" data-id="${a}">\n      <p class="movie__title" data-id="${a}">${n}</p>\n      <p class="movie__info" data-id="${a}">${r.map((e=>e.name)).join(", ")}  \n      <span class="movie__breacker" data-id="${a}"> | </span>\n    <span class="movie__year" data-id="${a}">${i.split("-").slice(0,1).join("")}</span><span class="movie__rating">${s}</span></p>\n    </div>\n  </a>\n</li>`))).join("")}})),a.register("ibf7D",(function(e,t){e.exports=new URL(a("kyEFX").resolve("anoP8"),import.meta.url).toString()})),a("kyEFX").register(JSON.parse('{"1zJhX":"library.17f921dd.js","anoP8":"poster-placeholder.32073048.png","eM9ss":"library.c7e4e793.js"}')),a("krGWQ"),a("04jNI"),a("d6qMT"),a("eSgc6"),a("gBTsr"),a("h53OD"),a("f33Wg");var o=a("krGWQ");const{headerBtn:s,queueBtn:c,watchedBtn:l}=o.refs;function d(e,t,n){e.classList.add(n),t.classList.remove(n)}s.addEventListener("click",(function(e){switch(e.target.dataset.action){case"watched":d(l,c,"header__item-btn--active");break;case"queue":d(c,l,"header__item-btn--active")}}));
//# sourceMappingURL=library.17f921dd.js.map
