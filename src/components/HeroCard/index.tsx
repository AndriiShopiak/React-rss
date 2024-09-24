import { itemInfo } from '../../types/types';
import './style.css';
import { getIdFromUrl } from '../../utils/utils';

interface itemsInfo {
  item: itemInfo;
  key: number;
  value: number;
}

function HeroCard(props: itemsInfo) {
  const { url } = props.item;
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(url)}.jpg`;
  return (
    <div className="cardItem">
      <img className="cardImage" src={imageUrl} alt="Photo" />
      <h3 className="cardTitle">{props.item.name}</h3>
      <p className="cardInfo">
        <b>Date of Birth:</b> {props.item.birth_year}
      </p>
      <p className="cardInfo">
        <b>Skin color:</b> {props.item.skin_color}
      </p>
    </div>
  );
}

export default HeroCard;
