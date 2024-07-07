import { Component } from 'react';
import SearchInput from '../components/SearchInput';
import ResultTab from '../components/ResultTab';

class SearchPage extends Component {
  render() {
    return (
      <>
        <section className="top">
          <div className="container">
            <div className="search_elem">
              <SearchInput />
            </div>
          </div>
        </section>
        <section className="bottom">
          <div className="container">
            <div className="view_result">
              <ResultTab />
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default SearchPage;
