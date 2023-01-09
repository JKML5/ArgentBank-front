import React from 'react'
import PropTypes from 'prop-types';
import iconChat from '../assets/icon-chat.png'
import iconMoney from '../assets/icon-money.png'
import iconSecurity from '../assets/icon-security.png'

function FeatureItem({ type, title, description }) {
  const icon = (type === 'Chat') ? iconChat : ((type === 'Money') ? iconMoney : iconSecurity)

  return (
    <div class="feature-item">
      <img src={icon} alt={`${type} Icon`} class="feature-icon" />
      <h3 class="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

FeatureItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default FeatureItem