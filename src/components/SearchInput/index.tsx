import './Input.css';
import handleClick from './handleClick';

interface NameFormProps {
  onSearch: (url: string) => void;
}

function SearchInput(props: NameFormProps) {
  return (
    <>
      <>
        <input
          className="searchInput"
          type="text"
          name="Search"
          id="search"
          defaultValue={localStorage.getItem('value')?.toString()}
          placeholder="What are we looking for today?"
          onChange={(e) => {
            handleClick(e.target.value);
          }}
        />
        <button
          type="button"
          className="searchButton"
          onClick={() => {
            props.onSearch(localStorage.getItem('value') || '');
          }}
        >
          Go
        </button>
      </>
    </>
  );
}

export default SearchInput;
