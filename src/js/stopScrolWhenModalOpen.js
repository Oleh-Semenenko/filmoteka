import { refs } from './refs';

export function showModal() {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');

  refs.body.style.position = 'fixed';
  refs.body.style.top = `-${scrollY}`;
  refs.body.style.right = `0`;
  refs.body.style.left = `0`;
  refs.body.style.paddingRight = `20px`;
}

export function closeModal() {
  const scrollY = refs.body.style.top;
  refs.body.style.position = '';
  refs.body.style.top = '';
  refs.body.style.paddingRight = `0`;
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty(
    '--scroll-y',
    `${window.scrollY}px`
  );
});
