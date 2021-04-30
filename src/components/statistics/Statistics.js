import React from 'react';
import Statistics from '../../statistical-data.json'
import StatisticCard from './StatisticCard'
import styles from './Statistics.module.css'

const StatisticsList = () => <ul className={styles.stat__list}>
    {Statistics.map((Statistic) =>(
            <StatisticCard
            key={Statistic.id}
            label={Statistic.label}
            percentage={Statistic.percentage}
            />
    ))}
</ul>;
export default StatisticsList;
