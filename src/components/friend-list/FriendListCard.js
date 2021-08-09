import React from 'react';
import PropTypes from 'prop-types';
import img from '../social-profile/3135715.svg';
import styles from './FriendListCard.module.css';

const FriendsCard = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        className={isOnline === true ? styles.isOnline : styles.isOffline}
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="80" />
      <p>{name}</p>
    </>
  );
};

FriendsCard.defaultProps = {
  avatar: img,
};

FriendsCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsCard;
