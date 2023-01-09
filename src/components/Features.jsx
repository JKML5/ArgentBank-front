import React from 'react'
import '../css/Features.css'
import FeatureItem from '../components/FeatureItem'

function Features() {
  const featureItemData = [
    {
      type: 'Chat',
      title: 'You are our #1 priority',
      description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
    },
    {
      type: 'Money',
      title: 'More savings means higher rates',
      description: 'The more you save with us, the higher your interest rate will be!'
    },
    {
      type: 'Security',
      title: 'Security you can trust',
      description: 'We use top of the line encryption to make sure your data and money is always safe.'
    }
  ]

  return (
    <section class="features">
      <h2 class="sr-only">Features</h2>
      {featureItemData.map((featureItem) => (
        <FeatureItem type={featureItem.type} title={featureItem.title} description={featureItem.description}  />
      ))}
    </section>
  )
}

export default Features