import { Component } from 'react';
import handleClick from './handleClick';
import './Input.css';

interface NameFormProps {
  onSearch: (data: string) => void;
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
            type="text"
            name="Search"
            id="search"
            defaultValue={localStorage.getItem('value')?.toString()}
            placeholder="What are we looking for today?"
            onChange={(e) => {
              console.log('Editing input field...');
              this.setState({ result: e.target.value });
            }}
          />
          <button type="button" onClick={() => handleClick(this.state.result)}>
            Send
          </button>
        </>
      </>
    );
  }
}
export default SearchInput;
