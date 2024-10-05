import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import ResultTab from './components/ResultTab';
import Loader from './components/Loader';
import { dataList } from './types/types';
import './assets/styles/global.css';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';
import ErrorBtnGenerate from './components/ErrorBtnGenerate/errorBtnGenerate';

interface AppState {
  searchResults: dataList;
}

function App() {
  const [result, setResult] = useState<AppState>({
    searchResults: {
      count: 0,
      next: '',
      previous: '',
      results: [],
    },
  });
  const [isLoading, setLoading] = useState({ isLoading: false });

  useEffect(() => {
    if (localStorage.getItem('value')) {
      getPeopleSearch(localStorage.getItem('value') || '');
    } else {
      getPeople();
    }
  }, []);

  async function getPeople() {
    setLoading({ isLoading: true });
    try {
      const result = await axios.get('https://swapi.dev/api/people');
      setResult({ searchResults: result.data });
      setLoading({ isLoading: false });
      return result;
    } catch {
      console.log('Something went wrong for getPeople request');
    }
  }
  async function getPeopleSearch(searchWord: string) {
    const searchUrl: string = 'https://swapi.dev/api/people/?search=' + `${searchWord.trim()}`;
    setLoading({ isLoading: true });

    try {
      const result = await axios.get(searchUrl);
      setResult({ searchResults: result.data });
      setLoading({ isLoading: false });
      return result;
    } catch {
      console.log('Something went wrong for getPeopleSearch request');
    }
  }

  return (
    <ErrorBoundary>
      <h1 className="mainTitle">Welcome to Star Wars Search</h1>
      <SearchInput onSearch={getPeopleSearch} />
      <ErrorBtnGenerate />
      {isLoading.isLoading ? <Loader /> : <ResultTab value={result.searchResults} />}
    </ErrorBoundary>
  );
}
export default App;
