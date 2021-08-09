import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticCard.module.css';

const StatisticCard = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
};

StatisticCard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticCard;
