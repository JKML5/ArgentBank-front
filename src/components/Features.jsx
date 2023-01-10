import React from 'react';
import '../css/Features.css';
import FeatureItem from './FeatureItem';

function Features() {
  const featureItemData = [
    {
      id: 1,
      type: 'Chat',
      title: 'You are our #1 priority',
      description:
        'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      id: 2,
      type: 'Money',
      title: 'More savings means higher rates',
      description:
        'The more you save with us, the higher your interest rate will be!',
    },
    {
      id: 3,
      type: 'Security',
      title: 'Security you can trust',
      description:
        'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ];

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featureItemData.map((featureItem) => (
        <FeatureItem
          key={featureItem.id}
          type={featureItem.type}
          title={featureItem.title}
          description={featureItem.description}
        />
      ))}
    </section>
  );
}

export default Features;
