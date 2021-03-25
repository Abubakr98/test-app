const url =
  'https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new';
const getData = () => {
  return fetch(url)
    .then((response) => response.json())
};
export const canIShowImages = async () => {
  const res = await Promise.all([getData(), getData()]);
  console.log(res);
  if (res[0] % 2 === 0 && res[1] % 2 === 0) return true;
  return false;
};
