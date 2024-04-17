import css from './Options.module.css';

export default function Options({ totalFeedback, updateFeedback, onReset }) {
  return (
    <ul className={css.list}>
      <li>
        <button onClick={() => updateFeedback('good')}>Good</button>
      </li>
      <li>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      </li>
      <li>
        <button onClick={() => updateFeedback('bad')}>Bad</button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button onClick={() => onReset('Reset')}>Reset</button>
        </li>
      )}
    </ul>
  );
}
