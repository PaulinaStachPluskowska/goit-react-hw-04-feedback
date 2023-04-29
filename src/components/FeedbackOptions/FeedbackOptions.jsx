import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ( { options, onLeaveFeedback }) => {
    return (
        <ul className={css.feedbackList}>
            {options.map((option, id) => (
                <li className={css.feedbackItem} key={id} name={option}>
                    <button className={css.feedbackButton} 
                        onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

