const refs = {
  picturesContainer: document.querySelector('.gallery'),
  searchForm: document.querySelector('#search-form'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
  loadMoreBtnLabel: document.querySelector(
    'button[data-action="load-more"] > .label',
  ),
  loadMoreBtnSpinner: document.querySelector(
    'button[data-action="load-more"] > .spinner',
  ),
};

export default refs;
