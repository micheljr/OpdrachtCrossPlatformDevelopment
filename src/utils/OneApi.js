const getUrlForListAllBooks = (value) => `https://the-one-api.dev/v2/${value}`;

export const getData = async (value) => {
  const apiKey = 'KRKEYAZ0QqB8wu9pfpiW';
  const url = getUrlForListAllBooks(value);

  return fetch(url, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${apiKey}`,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      //console.log(json);

      return json;
    })
    .catch(err => console.log(err));
};
