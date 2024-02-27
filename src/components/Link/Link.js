import React from 'react';
import DocLink from '@docusaurus/Link';

import styles from './Link.module.css';

export const Link = ({ url, title, children }) => (
  <DocLink className="button-link button--lg" to={url}>
    <div className={styles.link}>
      <span>{title}</span>
      {children}
    </div>
  </DocLink>
);
