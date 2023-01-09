import React from 'react';
import PropTypes from 'prop-types';
import iconChat from '../assets/icon-chat.png';
import iconMoney from '../assets/icon-money.png';
import iconSecurity from '../assets/icon-security.png';

/**
 * Returns image src corresponding to the type
 * @param {string} type name of icon type
 * @returns Image src
 */
function getIcon(type) {
  switch (type) {
    case 'Chat':
      return iconChat;
    case 'Money':
      return iconMoney;
    default:
      return iconSecurity;
  }
}

function FeatureItem({ type, title, description }) {
  const icon = getIcon(type);

  return (
    <div className="feature-item">
      <img src={icon} alt={`${type} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

FeatureItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;
