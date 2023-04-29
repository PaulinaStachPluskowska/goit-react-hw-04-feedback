import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ( { options, onLeaveFeedback }) => {
    return (
        <ul className={css.feedbackList}>
            {options.map(option => (
                <li className={css.feedbackItem} key={option}>
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
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

