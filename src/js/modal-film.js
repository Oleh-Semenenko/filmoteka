// export default async function makeFilmModalMarkup(
//   poster_path,
//   title,
//   vote_average,
//   vote_count,
//   popularity,
//   genre_ids,
//   overview,
//   btn_search,

//   id,
//   original_title,
//   genres,
//   tagline,
// ) {
//   return `
//     <div class="film__image">${
//       poster_path !== null
//         ? `<img class="image" src="${poster_path}" alt=${title}/>`
//         : ''
//     }
//       </div>
//       <div class="film__information">
//           <h2 class="film__title">${title}</h2>
//           <ul class="film__list">
//             <li class="film__item">
//               <p class="film__details">Vote / Votes</p>
//               <p class="film__info--uper">
//                 <span class="film__rating--orange">${vote_average}</span>
//                 <span class="film__rating--divider"> / </span>
//       <span class="vote-count">${vote_count}</span>
//               </p>
//             </li>
//             <li class="film__item">
//               <p class="film__details">Popularity</p>
//               <p class="film__info--uper">${popularity}</p>
//             </li>
//             <li class="film__item">
//               <p class="film__details">Original title</p>
//               <p>${title}</p>
//             </li>
//             <li class="film__item">
//               <p class="film__details">Genre</p>
//               ${
//                 genre_ids.length !== 0
//                   ? `<p class="film__info">${genre_ids}</p>`
//                   : `<p class="film__info">No information</p>`
//               }
//             </li>
//           </ul>
//         <div class="film__about">
//           <h3 class="film__about-title">About</h3>
//           ${
//             overview
//               ? `<p class="film__about-text">${overview}</p>`
//               : `<p class="film__about-text">No information</p>`
//           }
//         </div>
//         <div class="button-wrapper">
//           <button type="button" class="film__button btn__watch btn__watch__remove">Add to watched</button>
//           <button type="button" class="film__button btn__queue btn__queue__remove">Add to queue</button>
//           <button type="button" class="film__button btn__watch btn__watch__remove">Add to watched</button>
//          ${btn_search}
//           </div>
//         </div>`;
// }








