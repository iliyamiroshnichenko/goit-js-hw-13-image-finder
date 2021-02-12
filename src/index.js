import './sass/styles.scss';
import refs from './js/refs';
import apiService from './js/apiService';
import updatePicturesMarkup from './js/update-pictures-markup';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  refs.picturesContainer.innerHTML = '';
  form.reset();
  apiService.resetPage();
  apiService.fetchPictures().then(pictures => {
    updatePicturesMarkup(pictures);
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchPictures().then(pictures => {
    updatePicturesMarkup(pictures);
  });
});
