import './sass/styles.scss';
import api from './js/api';

let contacts = [];

let state = {
  name: 'Vasya Kurolesov',
  number: '937-99-92',
};

api.fetchContacts().then(data => console.log(data));

// api.createContact(state.name, state.number).then(data => console.log(data));
