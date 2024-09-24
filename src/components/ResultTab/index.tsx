import { propsTypes } from '../../types/types';
import HeroCard from '../HeroCard';
import './ResultTab.css';

function ResultTab(props: propsTypes) {
  const { results } = props.value;
  if (results.length === 0) {
    return <h1>Sorry, I didn't find anything</h1>;
  }
  return (
    <div className="resultCon">
      {results.map((el, i) => {
        return <HeroCard key={i} value={i} item={el} />;
      })}
    </div>
  );
}

export default ResultTab;
