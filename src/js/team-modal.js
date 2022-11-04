import openTeamModalOnClick from './team-metod-basiclightbox.js';
import { refs } from './refs.js';

refs.teamList.addEventListener('click', openTeamModal);

async function openTeamModal(e) {
    e.preventDefault();
    try {
        openTeamModalOnClick();
    } catch (error) {
        return Notify.failure(error.message);
    }
}