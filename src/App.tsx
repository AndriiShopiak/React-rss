import { Component, ReactNode } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import ResultTab from './components/ResultTab';

interface AppProps {}
interface AppState {
  searchResults: string[];
  isLoading: boolean;
  hasError: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      searchResults: [],
      isLoading: true,
      hasError: false,
    };
  }
  componentDidMount(): void {
    this.getPeople();
  }
  async getPeople() {
    try {
      const result = await axios.get('https://swapi.dev/api/people');
      this.setState({ searchResults: result.data });
      return result;
    } catch {
      console.log('Something went wrong for people request');
    }
  }
  async getPeopleSearch(searchWord: string) {
    let mainUrl: string = 'https://swapi.dev/api/people';
    if (localStorage.getItem('value')) {
      mainUrl = 'https://swapi.dev/api/people/?search=' + `${searchWord}`;
    }
    try {
      const result = await axios.get(mainUrl);
      return result;
    } catch {
      console.log('Something went wrong for people request');
    }
  }
  render(): ReactNode {
    console.log(this.state.searchResults);
    return (
      <>
        <SearchInput onSearch={this.getPeopleSearch} />
        <pre>Hello, I am React App Component</pre>
        <ResultTab value={this.state.searchResults} />
      </>
    );
  }
}
export default App;
