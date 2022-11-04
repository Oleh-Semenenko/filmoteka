import { refs } from './refs';

function addClassIsHidden() {
  refs.disabledNotification.classList.add('is-hidden');
}

function removeClassIsHidden() {
  refs.disabledNotification.classList.remove('is-hidden');
}

function queueBtnDisabledTrue() {
  refs.queueBtn.disabled = true;
}

function watchedBtnDisabledTrue() {
  refs.watchedBtn.disabled = true;
}

function addClassActiveOnQueueBtn() {
  refs.queueBtn.classList.add('header__item-btn--active');
}

function removeClassActiveOnWatchedBtn() {
  refs.watchedBtn.classList.remove('.header__item-btn--active');
}

export {
  addClassIsHidden,
  removeClassIsHidden,
  queueBtnDisabledTrue,
  watchedBtnDisabledTrue,
  addClassActiveOnQueueBtn,
  removeClassActiveOnWatchedBtn,
};
