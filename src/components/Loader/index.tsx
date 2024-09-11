import React, { ReactNode } from 'react';
import './loader.css';

class Loader extends React.Component {
  render(): ReactNode {
    return <h1 className="loaderTitle">Loading...</h1>;
  }
}
export default Loader;
