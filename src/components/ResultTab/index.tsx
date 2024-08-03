import { Component } from 'react';
import getPeople from '../../api/getPeople';

class ResultTab extends Component {
  constructor(props: []) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    getPeople()
      .then((res) => res)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result?.data.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    console.log(Object.keys(items));
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return items.map((el, i) => {
        return (
          <div key={i}>
            <h1 style={{ background: 'skyblue' }}>{el.name}</h1>
            <h3>Personal Info:</h3>
            Height:
            {el.height}
            <h4>Mass:</h4>
            {el.mass}
          </div>
        );
      });
    }
  }
}
export default ResultTab;
