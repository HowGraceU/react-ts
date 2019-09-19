import React from 'react';
import styles from './index.css';

import Props from './props';
import ClassComponent from './class';

export default function () {
  return (
    <>
      <Props text="props-test" className={styles.fzGreen} />
      <ClassComponent />
    </>
  );
}
