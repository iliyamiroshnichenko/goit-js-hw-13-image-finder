import './sass/styles.scss';
import refs from './js/refs';
import apiService from './js/apiService';
import updatePicturesMarkup from './js/update-pictures-markup';
import LoadMoreBtn from './js/load-more-btn';

const loadMoreBtn = new LoadMoreBtn('button[data-action="load-more"]');

refs.searchForm.addEventListener('submit', formSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchPictures);

function fetchPictures() {
  loadMoreBtn.disable();

  apiService.fetchPictures().then(pictures => {
    updatePicturesMarkup(pictures);
    loadMoreBtn.show();
    loadMoreBtn.enable();
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}

function formSubmitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  clearPicturesContainer();
  apiService.resetPage();
  fetchPictures();
  form.reset();
}

function clearPicturesContainer() {
  refs.picturesContainer.innerHTML = '';
}
