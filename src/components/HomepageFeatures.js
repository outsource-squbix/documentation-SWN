import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  { 
    title: 'SSID',
    Svg: require('../../static/img/bis.svg').default,
     desc:'Self-Sovereign Identity. '
  },
  {
    title: 'Pairwise',
    Svg: require('../../static/img/conn.svg').default,
    desc:'connection to Admin.'
    
  },
  {
    title: 'Wallet',
    Svg: require('../../static/img/wallet.svg').default,
    desc:'create your wallet and you can Restore it.'
  },
  
];

function Feature({Svg, title, desc}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
