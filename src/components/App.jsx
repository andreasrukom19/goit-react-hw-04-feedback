import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedback;

  const handleAddFeedback = btnName => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [btnName]: prevFeedback[btnName] + 1,
    }));
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalNumberFeedback = countTotalFeedback();
    if (totalNumberFeedback === 0) {
      return 0;
    }
    const positiveFeedbackPercentage = Math.round(
      (feedback.good / totalNumberFeedback) * 100
    );
    return positiveFeedbackPercentage;
  };

  return (
    <div className="wrapper">
      <Section title="Feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleAddFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
