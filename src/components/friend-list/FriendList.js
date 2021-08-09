import React from 'react';
import FriendsCard from './FriendListCard';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => (
  <ul className={styles.friend__list}>
    {friends.map(Friend => (
      <li key={Friend.id}>
        <FriendsCard
          avatar={Friend.avatar}
          name={Friend.name}
          isOnline={Friend.isOnline}
        />
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
export default FriendsList;
