export default function handleClick(value: string) {
  const edited: string = value.trim();
  localStorage.setItem('value', edited);
}
