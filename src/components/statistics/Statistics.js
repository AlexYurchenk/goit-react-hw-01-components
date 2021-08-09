import React from 'react';
import StatisticCard from './StatisticCard';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatisticsList = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat__list}>
        {stats.map(Statistic => (
          <li key={Statistic.id} className={styles.item}>
            <StatisticCard
              key={Statistic.id}
              label={Statistic.label}
              percentage={Statistic.percentage}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default StatisticsList;
