import { Component } from 'react';
import SearchInput from '../components/SearchInput';
import Button from '../components/SearchButton';

class SearchPage extends Component {
  render() {
    return (
      <>
        <section className="top">
          <div className="container">
            <div className="search_elem">
              <SearchInput />
              <Button />
            </div>
          </div>
        </section>
        <section className="bottom">
          <div className="container">
            <div className="view_result"></div>
          </div>
        </section>
      </>
    );
  }
}
export default SearchPage;
