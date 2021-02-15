const apiKey = '20192065-3084c849aae1164575ffb5a21';

export default {
  searchQuery: '',
  page: 1,
  fetchPictures() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
    return fetch(url)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Something went wrong!(');
      })
      .then(({ hits }) => {
        if (hits.length === 0) {
          throw new Error('Nothing found!(');
        }
        this.incrementPage();
        return hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
