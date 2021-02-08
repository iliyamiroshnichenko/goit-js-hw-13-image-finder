/*
 * Асинхронные функции возвращают промис
 */
const delay = ms => {
  return new Promise(res => {
    setTimeout(() => res(''), ms);
  });
};

const getFruit = async name => {
  const fruits = {
    apple: '🍎',
    peach: '🍑',
    grapes: '🍇',
  };
  await delay(1000);
  return fruits[name];
};

// getFruit('apple').then(fr => console.log(fr));

// const makePromiseSmothie = () => {
//   return getFruit('apple').then(apple => {
//     return getFruit('peach').then(peach => {
//       return [apple, peach];
//     });
//   });
// };

// makePromiseSmothie().then(smothie => console.log(smothie));

// const makeAsyncSmothie = async () => {
//   console.time('время на резолв промисов');
//   const apple = getFruit('apple');
//   const peach = getFruit('peach');
//   const grapes = getFruit('grapes');
//   const smothie = await Promise.all([apple, peach, grapes]);
//   console.timeEnd('время на резолв промисов');
//   return smothie;
// };
// makeAsyncSmothie().then(smothie => console.log(smothie));

const makeAsyncSmothie = async () => {
  try {
    const apple = getFruit('apple');
    const peach = getFruit('peach');
    const smothie = await Promise.all([apple, peach]);
    throw 'Поломалось (((';
    return smothie;
  } catch (err) {
    console.log('Error', err);
    throw err;
  }
};
makeAsyncSmothie()
  .then(smothie => console.log(smothie))
  .catch(err => console.log(err));

const getContacts = () => {
  return fetch('').then(res => res.json());
};

const getContacts2 = async () => {
  try {
    const res = await fetch('');
    const contacts = res.json();
    return contacts;
  } catch (err) {
    throw err;
  }
};

const getFullUserProfile = () => {
  return fetch('/user/id').then(user => {
    return fetch(`/full/${user.id}`).then(data => data.full);
  });
};
const getFullUserProfile2 = async () => {
  try {
    const user = await fetch('/user/id');
    const fullData = await fetch(`/full/${user.id}`);
    return fullData;
  } catch (err) {
    throw err;
  }
};
