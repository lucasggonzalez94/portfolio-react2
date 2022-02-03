import React from 'react';

import styles from './styles/Container.module.scss';

function Container({ children, id }) {
  return (
    <section className={styles.container} id={id}>
      {children}
    </section>
  );
}

export default Container;
