import React from 'react';
import { ReactNode } from 'react';
import { propsTypes } from '../../types/types';
import HeroCard from '../HeroCard';
import './ResultTab.css';

class ResultTab extends React.Component<propsTypes> {
  render(): ReactNode {
    const { results } = this.props.value;
    return (
      <div className="resultCon">
        {results.map((el, i) => {
          return <HeroCard key={i} value={i} item={el} />;
        })}
      </div>
    );
  }
}
export default ResultTab;
