import { Component, ReactNode } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import ResultTab from './components/ResultTab';

interface AppProps {}
interface AppState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchResults: any;
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
    return (
      <>
        <h1>Welcome to Star Wars Search</h1>
        <SearchInput onSearch={this.getPeopleSearch} />
        <pre>Hello, I am React App Component</pre>
        <ResultTab value={this.state.searchResults} />
      </>
    );
  }
}
export default App;
