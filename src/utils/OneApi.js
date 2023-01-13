const getUrlForListAllBooks = (value) => `https://the-one-api.dev/v2/${value}`;

export const getData = async (value) => {
  const apiKey = 'KRKEYAZ0QqB8wu9pfpiW';
  const url = getUrlForListAllBooks(value);

  return await fetch(url, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${apiKey}`,
    }),
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log(err));
};
