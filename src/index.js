import './sass/styles.scss';
import refs from './js/refs';
import apiService from './js/apiService';
import updatePicturesMarkup from './js/update-pictures-markup';
import LoadMoreBtn from './js/load-more-btn';
import notification from './js/notifications';
import showModal from './js/showModal';

const loadMoreBtn = new LoadMoreBtn('button[data-action="load-more"]');

refs.searchForm.addEventListener('submit', formSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchPictures);
refs.picturesContainer.addEventListener('click', showModal);

function fetchPictures() {
  loadMoreBtn.disable();

  apiService
    .fetchPictures()
    .then(pictures => {
      updatePicturesMarkup(pictures);
      loadMoreBtn.show();
      loadMoreBtn.enable();
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .catch(err => {
      loadMoreBtn.hide();
      notification.badRequest(err);
    });
}

function formSubmitHandler(event) {
  event.preventDefault();
  io.unobserve(refs.sentinel);
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  clearPicturesContainer();
  createSentinel();
  apiService.resetPage();
  // fetchPictures();
  form.reset();
  io.observe(refs.sentinel);
}

function clearPicturesContainer() {
  refs.picturesContainer.innerHTML = '';
}

function createSentinel() {
  refs.picturesContainer.appendChild(refs.sentinel);
}

const io = new IntersectionObserver(
  entries => {
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
        loadMoreBtn.hide();
        notification.badRequest(err);
      });
  },
  {
    rootMargin: '120px',
  },
);
