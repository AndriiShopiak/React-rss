export default async function getPeople() {
  try {
    const result = await fetch('https://swapi.dev/api/people');
    return result;
  } catch {
    console.log('Something went wrong for people request');
  }
}
