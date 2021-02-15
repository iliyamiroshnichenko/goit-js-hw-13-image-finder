import picturesTpl from '../templates/pictures.hbs';
import refs from './refs';

function updatePicturesMarkup(params) {
  const markup = picturesTpl(params);
  refs.picturesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updatePicturesMarkup;
