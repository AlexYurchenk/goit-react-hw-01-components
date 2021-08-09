import React from 'react';
import PropTypes from 'prop-types';
import TransactionsLine from './TransactionsLine';
import styles from './TransactionsList.module.css';

const TransactionsList = ({ data }) => (
  <table className={styles.transaction__history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {data.map(TransactionData => (
        <tr key={TransactionData.id}>
          <TransactionsLine
            type={TransactionData.type}
            amount={TransactionData.amount}
            currency={TransactionData.currency}
          />
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
export default TransactionsList;
