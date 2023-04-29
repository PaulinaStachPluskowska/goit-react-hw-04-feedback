import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    return(
        <ul className={css.statisticList}>
                <li className={css.statisticItem}> Good:      {good}</li>
                <li className={css.statisticItem}> Neutral:   {neutral}</li>
                <li className={css.statisticItem}> Bad:         {bad}</li>
                <li className={css.statisticItem}> Total:       {total}</li>
                <li className={css.statisticItem}> Positive feedback:   {positivePercentage}%</li>
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

export default Statistics;