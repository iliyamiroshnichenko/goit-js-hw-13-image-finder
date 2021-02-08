const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE2ZDk3MTViODAzNjAwMTcyMzQ4NDciLCJpYXQiOjE2MTIxMTAxOTN9.VZVE2ZLDt1dx9iRosgDjX5yy-TQY_9HNafznHNisvp8';

const headers = {
  Authorization: `Bearer ${token}`,
};

const fetchContacts = () => {
  return fetch('http://goit-phonebook-api.herokuapp.com/contacts', {
    headers,
  }).then(res => res.json());
};

const createContact = (name, number) => {
  const options = {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, number }),
  };
  return fetch(
    'http://goit-phonebook-api.herokuapp.com/contacts',
    options,
  ).then(res => res.json());
};

const deleteContact = id => {
  const options = {
    method: 'DELETE',
    headers,
  };
  return fetch(
    `http://goit-phonebook-api.herokuapp.com/contacts/${id}`,
    options,
  ).then(res => res.json());
};

export default { fetchContacts, createContact, deleteContact };
