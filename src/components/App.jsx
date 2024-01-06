import { Component } from "react";
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleAddFeedback = btnName => {
    this.setState(prevState => {
      return { [btnName]: prevState[btnName] + 1 }
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const totalNumberFeedback = this.countTotalFeedback();
    if (totalNumberFeedback === 0) {
      return 0;
    }
    const positiveFeedbackPercentage = Math.round(this.state.good / totalNumberFeedback * 100);
    return positiveFeedbackPercentage;
  }

  render() {
    return (
      <div className="wrapper">
        <Section title="Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleAddFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ?
            (<Notification message="There is no feedback" />) : (
              < Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
            />)
          }
        </Section>
      </div>
    );
  };
}