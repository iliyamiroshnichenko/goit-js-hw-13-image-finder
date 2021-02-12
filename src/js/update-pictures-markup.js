import picturesTpl from '../templates/pictures.hbs';
import refs from '../js/refs';

function updatePicturesMarkup(params) {
  const markup = picturesTpl(params);
  refs.picturesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updatePicturesMarkup;
