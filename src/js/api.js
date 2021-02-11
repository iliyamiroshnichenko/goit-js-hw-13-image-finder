import axios from 'axios';

// const baseUrl = 'https://goit-phonebook-api.herokuapp.com';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE2ZDk3MTViODAzNjAwMTcyMzQ4NDciLCJpYXQiOjE2MTIxMTAxOTN9.VZVE2ZLDt1dx9iRosgDjX5yy-TQY_9HNafznHNisvp8';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// const headers = {
//   Authorization: `Bearer ${token}`,
// };

// const fetchContacts = async () => {
//   try {
//     // throw 'Все сломалось!';
//     const res = await fetch(`${baseUrl}/contacts`, {
//       headers,
//     });
//     const contacts = res.json();
//     return contacts;
//   } catch (err) {
//     throw err;
//   }
// };

const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

// const fetchContacts1 = () => {
//   return fetch(`${baseUrl}/contacts`, {
//     headers,
//   }).then(res => res.json());
// };

const createContact = async (name, number) => {
  const { data } = axios.post(`/contacts`, { name, number });
  return data;
};

// const createContact = async (name, number) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name, number }),
//   };
//   try {
//     const res = await fetch(`${baseUrl}/contacts`, options);
//     const data = res.json();
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };

// const createContact = (name, number) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name, number }),
//   };
//   return fetch(`${baseUrl}/contacts`, options).then(res => res.json());
// };

// const deleteContact = id => {
//   const options = {
//     method: 'DELETE',
//     headers,
//   };
//   return fetch(`${baseUrl}/contacts/${id}`, options).then(res => res.json());
// };

const deleteContact = async id => {
  await axios.delete(`/contacts/${id}`);
};

// const updateContact = (id, fields) => {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(fields),
//   };
//   return fetch(`${baseUrl}/contacts/${id}`, options).then(res => res.json());
// };

const updateContact = (id, fields) => {
  const { data } = axios.patch(`/contacts/${id}`, fields);
  return data;
};

export default { fetchContacts, createContact, deleteContact, updateContact };
