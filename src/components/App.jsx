import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notifications/Notifications';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () =>{
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const total = this.countTotalFeedback();
    return Math.floor((good / total) * 100);
  };

  handleFeedback = option => {
    this.setState(previousState => {
      return {[option]: previousState[option] + 1};
    });
    this.countTotalFeedback();
  };


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.container}>
        <Section title='Please leave your feedback'>
          <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={option => this.handleFeedback(option)}
          />
        </Section>
        <Section title='Statistics'>
          {total === 0 ? (
            <Notification message = 'There is no feedback' />
          ) : (
            <Statistics
            good = {good}
            neutral = {neutral}
            bad = {bad}
            total = {total}
            positivePercentage = {percentage}
            />
          )}
        </Section>
        </div>
    )
  }

}
// } = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
