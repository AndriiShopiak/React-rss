import { Component, ReactNode } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import ResultTab from './components/ResultTab';
import Loader from './components/Loader';
import { dataList } from './types/types';
import './assets/styles/global.css';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';
import ErrorBtnGenerate from './components/ErrorBtnGenerate/errorBtnGenerate';

interface AppProps {}
interface AppState {
  searchResults: dataList;
  isLoading: boolean;
  hasError: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.getPeopleSearch = this.getPeopleSearch.bind(this);
    this.state = {
      searchResults: {
        count: 0,
        next: '',
        previous: '',
        results: [],
      },
      isLoading: false,
      hasError: false,
    };
  }
  componentDidMount(): void {
    if (localStorage.getItem('value')) {
      this.getPeopleSearch(localStorage.getItem('value') || '');
    } else {
      this.getPeople();
    }
  }
  async getPeople() {
    this.setState({ isLoading: true });
    try {
      const result = await axios.get('https://swapi.dev/api/people');
      this.setState({ searchResults: result.data, isLoading: false });
      return result;
    } catch {
      console.log('Something went wrong for getPeople request');
    }
  }
  async getPeopleSearch(searchWord: string) {
    const searchUrl: string = 'https://swapi.dev/api/people/?search=' + `${searchWord.trim()}`;
    this.setState({ isLoading: true });

    try {
      const result = await axios.get(searchUrl);
      this.setState({ searchResults: result.data, isLoading: false });
      return result;
    } catch {
      console.log('Something went wrong for getPeopleSearch request');
    }
  }
  render(): ReactNode {
    return (
      <ErrorBoundary>
        <h1 className="mainTitle">Welcome to Star Wars Search</h1>
        <SearchInput onSearch={this.getPeopleSearch} />
        <ErrorBtnGenerate />
        {this.state.isLoading ? <Loader /> : <ResultTab value={this.state.searchResults} />}
      </ErrorBoundary>
    );
  }
}
export default App;
