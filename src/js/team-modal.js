import openTeamModalOnClick from './team-metod-basiclightbox.js';
import { refs } from './refs.js';

// TODO: закоментировал, поскольку такой переменной еще нет и выскакивает ошибка в консоли;
// refs.teamList.addEventListener('click', openTeamModal);

async function openTeamModal(e) {
  e.preventDefault();
  try {
    openTeamModalOnClick();
  } catch (error) {
    console.log(error.message);
  }
}
