import React from 'react';
import { ReactNode } from 'react';
import { itemInfo } from '../../types/types';
interface itemsInfo {
  item: itemInfo;
}

class HeroCard extends React.Component<itemsInfo> {
  render(): ReactNode {
    console.log(this.props);
    return (
      <div className="cardItem">
        <h3>{this.props.item.name}</h3>
        <p>{this.props.item.birth_year}</p>
        <p>{this.props.item.skin_color}</p>
      </div>
    );
  }
}
export default HeroCard;
