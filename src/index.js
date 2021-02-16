import './sass/styles.scss';
import refs from './js/refs';
import apiService from './js/apiService';
import showModal from './js/showModal';
import io from './js/io';

refs.searchForm.addEventListener('submit', formSubmitHandler);
refs.picturesContainer.addEventListener('click', showModal);

function formSubmitHandler(event) {
  event.preventDefault();
  io.unobserve(refs.sentinel);
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  clearPicturesContainer();
  createSentinel();
  apiService.resetPage();
  form.reset();
  io.observe(refs.sentinel);
}

function clearPicturesContainer() {
  refs.picturesContainer.innerHTML = '';
}

function createSentinel() {
  refs.picturesContainer.appendChild(refs.sentinel);
}

// function fetchPictures() {
//   loadMoreBtn.disable();

//   apiService
//     .fetchPictures()
//     .then(pictures => {
//       updatePicturesMarkup(pictures);
//       loadMoreBtn.show();
//       loadMoreBtn.enable();
//       window.scrollTo({
//         top: document.documentElement.offsetHeight,
//         behavior: 'smooth',
//       });
//     })
//     .catch(err => {
//       loadMoreBtn.hide();
//       notification.badRequest(err);
//     });
// }
