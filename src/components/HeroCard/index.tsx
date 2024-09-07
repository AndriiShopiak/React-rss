import React from 'react';
import { ReactNode } from 'react';
import { itemInfo } from '../../types/types';
interface itemsInfo {
  item: itemInfo;
}

class HeroCard extends React.Component<itemsInfo> {
  render(): ReactNode {
    return (
      <div className="cardItem">
        <h3 className="cardTitle">{this.props.item.name}</h3>
        <p className="cardInfo">{this.props.item.birth_year}</p>
        <p className="cardInfo">{this.props.item.skin_color}</p>
      </div>
    );
  }
}
export default HeroCard;
