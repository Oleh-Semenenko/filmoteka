import { refs } from '../refs';

const { headerBtn, queueBtn, watchedBtn } = refs;


headerBtn.addEventListener('click', changeActiveHeaderBtn);

function changeActiveHeaderBtn(e) {
  switch (e.target.dataset.action) {
    case 'watched':
      choseActiveEl(watchedBtn, queueBtn, 'header__item-btn--active');
      break;
    case 'queue':
      choseActiveEl(queueBtn, watchedBtn, 'header__item-btn--active');
      break;
  }
}

function choseActiveEl(activate, deactivate, condition) {
  activate.classList.add(condition);
  deactivate.classList.remove(condition);
}

