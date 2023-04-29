import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import { Notification } from './Notifications/Notifications';
import css from './App.module.css';

const App = () => {
  
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const countTotalFeedback = () =>{
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.floor((state.good / total) * 100);
  };

  const handleFeedback = option => {
    setState(previousState => ({
      ...previousState,
      [option]: previousState[option] + 1,
    }));
  };
    
    const { good, neutral, bad } = state;
    const total = countTotalFeedback();
    const percentage = countPositiveFeedbackPercentage();

    return (
      <div className={css.container}>
        <Section title='Please leave your feedback'>
          <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={option => handleFeedback(option)}
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
    );


};

export default App;
