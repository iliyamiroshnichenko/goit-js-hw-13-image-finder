import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basiclightbox.min.css';

function showModal(event) {
  const img = event.target;
  if (img.nodeName !== 'IMG') {
    return;
  }
  const largeImgUrl = img.dataset.source;
  const instance = basicLightbox.create(`<img src="${largeImgUrl}">`);
  instance.show();
}

export default showModal;
