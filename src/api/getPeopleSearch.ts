import axios from 'axios';
export default async function getPeopleSearch(searchWord: string) {
  let mainUrl: string = 'https://swapi.dev/api/people';
  if (localStorage.getItem('value')) {
    mainUrl = 'https://swapi.dev/api/people/?search=' + `${searchWord}`;
  }
  try {
    const result = await axios.get(mainUrl);
    return result;
  } catch {
    console.log('Something went wrong for people request');
  }
}
