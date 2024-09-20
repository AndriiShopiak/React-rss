import axios from 'axios';

export default async function getPeople() {
  try {
    const result = await axios.get('https://swapi.dev/api/people');
    return result;
  } catch {
    console.log('Something went wrong for people request');
  }
}
