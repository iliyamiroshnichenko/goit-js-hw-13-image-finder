import picturesTpl from '../templates/pictures.hbs';
import refs from './refs';

function updatePicturesMarkup(pictures) {
  if (!pictures) return;
  const markup = picturesTpl(pictures);
  refs.picturesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updatePicturesMarkup;
