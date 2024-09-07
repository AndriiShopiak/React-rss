import { Component } from 'react';
import './Input.css';
import handleClick from './handleClick';

interface NameFormProps {
  onSearch: (url: string) => void;
}

interface NameFormState {
  result: string;
}
class SearchInput extends Component<NameFormProps, NameFormState> {
  constructor(props: NameFormProps) {
    super(props);
    this.state = { result: '' };
  }
  render() {
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
              console.log('Editing input field...');
              this.setState({ result: e.target.value });
              handleClick(e.target.value);
            }}
          />
          <button
            type="button"
            className="searchButton"
            onClick={() => {
              this.props.onSearch(localStorage.getItem('value') || 'https://swapi.dev/api/people');
            }}
          >
            Send
          </button>
        </>
      </>
    );
  }
}
export default SearchInput;
