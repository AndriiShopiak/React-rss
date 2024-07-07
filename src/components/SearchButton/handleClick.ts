export default function handleClick(value: string) {
  console.log(value);
  localStorage.setItem('value', value);
}
