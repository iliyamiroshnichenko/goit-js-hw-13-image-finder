const apiKey = '20192065-3084c849aae1164575ffb5a21';

function fetchPictures(searchQuery, page = 1) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;

  return fetch(url)
    .then(res => res.json())
    .then(({ hits }) => hits)
    .catch(err => console.log(err));
}

export default fetchPictures;
