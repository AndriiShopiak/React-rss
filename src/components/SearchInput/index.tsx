import { Component } from 'react';
import handleClick from './handleClick';

interface NameFormProps {}

interface NameFormState {
  some: string;
}
class SearchInput extends Component<NameFormProps, NameFormState> {
  constructor(props: []) {
    super(props);
    this.state = { some: 'hello' };
  }
  render() {
    return (
      <>
        <input
          type="text"
          name="Search"
          id="search"
          defaultValue={localStorage.getItem('value')?.toString()}
          placeholder="What are we looking for today?"
          onChange={(e) => {
            this.setState({ some: e.target.value });
          }}
        />
        <button type="button" onClick={() => handleClick(this.state.some)}>
          Send
        </button>
      </>
    );
  }
}
export default SearchInput;
