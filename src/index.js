import './sass/styles.scss';
// import './js/async-await';
import api from './js/api';

let state = {
  name: 'Kolya Syroedov',
  number: '851-46-27',
};
// api.createContact(state.name, state.number).then(data => console.log(data));
// api.deleteContact('602566e583a3e50017535cef');
api.fetchContacts().then(data => console.log(data));
