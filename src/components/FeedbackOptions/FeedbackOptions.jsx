import { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className={css['btn-block']}>
        {this.props.options.map(option => {
          return (
            <button
              key={option}
              type="button"
              className={css.button}
              onClick={() => this.props.onLeaveFeedback(option)}
            >
              {option}
            </button>
          )
        })}
      </div>
    )
  }
}