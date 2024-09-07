import React from 'react';
import { ReactNode } from 'react';
import { propsTypes } from '../../types/types';
import HeroCard from '../HeroCard';

class ResultTab extends React.Component<propsTypes> {
  render(): ReactNode {
    const { results } = this.props.value;
    return results.map((el, i) => {
      return <HeroCard key={i} item={el} />;
    });
  }
}
export default ResultTab;
