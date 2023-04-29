import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    const Array =[
        [1, `Good: \t${good}`],
        [2, `Neutral: ${neutral}`],
        [3, `Bad: \t${bad}`],
        [4, `Total: \t${total}`],
        [5, `Positive feedback: ${positivePercentage}%`],
    ];

    return (
    <ul className={css.statisticList}>
        {Array.map(([id, superString]) => (
            <li className={css.statisticItem} key={id}>
                <span className={css.paragraph}>{superString}
                </span>
            </li>
        ))}
    </ul>
    );
};



Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired, 
};