import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <ul className="statistic-list">
      <li className="statistic-item">Good: {good}</li>
      <li className="statistic-item">Neutral: {neutral}</li>
      <li className="statistic-item">Bad: {bad} </li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}</li>
    </ul>
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
