import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div className={css['btn-block']}>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={css.button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        )
      })}
    </div>
    )
}