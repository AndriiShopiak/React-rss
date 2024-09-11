import React from 'react';
import { ReactNode } from 'react';
import { itemInfo } from '../../types/types';
import './style.css';
import { getIdFromUrl } from '../../utils/utils';

interface itemsInfo {
  item: itemInfo;
  key: number;
  value: number;
}

class HeroCard extends React.Component<itemsInfo> {
  render(): ReactNode {
    const { url } = this.props.item;
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(url)}.jpg`;
    return (
      <div className="cardItem">
        <img className="cardImage" src={imageUrl} alt="Photo" />
        <h3 className="cardTitle">{this.props.item.name}</h3>
        <p className="cardInfo">
          <b>Date of Birth:</b> {this.props.item.birth_year}
        </p>
        <p className="cardInfo">
          <b>Skin color:</b> {this.props.item.skin_color}
        </p>
      </div>
    );
  }
}
export default HeroCard;
