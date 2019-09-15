import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from './index.css';

const App = function App() {
  const a: number = 111;

  return <div className={styles.fzBlue}>{a}</div>;
};

ReactDOM.render(<App />, document.getElementById('app'));
