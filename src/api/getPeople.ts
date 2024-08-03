import axios from 'axios';

export default async function getPeople(url: string = 'https://swapi.dev/api/people') {
  try {
    const result = await axios.get(url);
    return result;
  } catch {
    console.log('Something went wrong for people request');
  }
}
