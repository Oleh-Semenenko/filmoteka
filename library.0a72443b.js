var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequired7c6=a),a.register("f33Wg",(function(e,t){var i,n,o,r;i=e.exports,n="default",o=function(){return g},Object.defineProperty(i,n,{get:o,set:r,enumerable:!0,configurable:!0});var s=a("krGWQ");const l=new(0,a("ezibT").default)({url:"https://api.themoviedb.org/3/movie",params:{api_key:"f23afa13cf10e0a13fa8c4a5195ece8b"}}),c=localStorage.getItem("Watched"),d=JSON.parse(c),p=localStorage.getItem("Queue"),f=JSON.parse(p);if(c&&0!==d.length){{function u(){try{const e=d.reduce(((e,t)=>{l.url=`https://api.themoviedb.org/3/movie/${t}`;const i=l.fetchMovies();return e.push(i),e}),[]);Promise.all(e).then((e=>{s.refs.moviesList.innerHTML=m(e)})).catch((e=>console.log(e)))}catch(e){console.log(e)}}s.refs.watchedBtn.addEventListener("click",u)}var g=u;if(p&&0!==d.length){s.refs.queueBtn.addEventListener("click",(function(){try{const e=f.reduce(((e,t)=>{l.url=`https://api.themoviedb.org/3/movie/${t}`;const i=l.fetchMovies();return e.push(i),e}),[]);Promise.all(e).then((e=>{s.refs.moviesList.innerHTML=m(e)})).catch((e=>console.log(e)))}catch(e){console.log(e)}}))}}function m(e){return e.map((({poster_path:e,original_title:t,release_date:i,genres:a,id:n,vote_average:o})=>(console.log(a),`\n      <li class="movie__item" data-id="${n}">\n  <a class="movie__link" data-id="${n}" href="">\n  <img src="https://image.tmdb.org/t/p/w342${e}" class="movie__image" data-id="${n}" alt="Poster movie ${t}"  width="" height="" />\n    <div class="movie__description" data-id="${n}">\n      <p class="movie__title" data-id="${n}">${t}</p>\n      <p class="movie__info" data-id="${n}">${a.map((e=>e.name)).join(", ")}  \n      <span class="movie__breacker" data-id="${n}"> | </span>\n    <span class="movie__year" data-id="${n}">${i.split("-").slice(0,1).join("")}</span><span class="movie__rating">${o}</span></p>\n    </div>\n  </a>\n</li>`))).join("")}})),a("f33Wg");
//# sourceMappingURL=library.0a72443b.js.map
