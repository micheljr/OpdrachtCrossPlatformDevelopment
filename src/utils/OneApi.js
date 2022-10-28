const getUrlForListAllBooks = (value) => {
  const data = {
    api_key: 'KRKEYAZ0QqB8wu9pfpiW',
    area: value,
  };

  const queryString = Object.keys(data)
    .map((k) => `${k}=${encodeURIComponent(data[k])}`)
    .join('&');

  return `https://the-one-api.dev/v2/${queryString}`;
};

export const getData = async (value) => {
  const url = getUrlForListAllBooks(value);

  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
};
