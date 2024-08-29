import React from 'react';
import { ReactNode } from 'react';
import { propsTypes } from '../../types/types';

class ResultTab extends React.Component<propsTypes> {
  render(): ReactNode {
    const { results } = this.props.value;
    console.log(results);
    console.log(this.props.value);
    if (results) {
      return results.map((el, i) => {
        return <li key={i}>{el.name}</li>;
      });
    }
  }
}
export default ResultTab;
