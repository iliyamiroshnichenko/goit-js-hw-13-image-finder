import apiService from './apiService';
import updatePicturesMarkup from './update-pictures-markup';
import refs from './refs';
import notification from './notifications';

const options = {
  rootMargin: '150px',
};

const io = new IntersectionObserver(entries => {
  if (!entries.some(entry => entry.intersectionRatio > 0)) {
    return;
  }
  apiService
    .fetchPictures()
    .then(pictures => {
      updatePicturesMarkup(pictures);
    })
    .then(() => {
      refs.picturesContainer.appendChild(refs.sentinel);
    })
    .catch(err => {
      notification.badRequest(err);
    });
}, options);

export default io;
