import React from 'react';
import '../css/Features.css';
import FeatureItem from './FeatureItem';
import featureItemsData from '../_mocks_/featureItemsData';

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featureItemsData.map((featureItem) => (
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
