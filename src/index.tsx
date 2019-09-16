import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from './index.css';

function testable(target: any) {
  const theTarget = target;
  theTarget.isTestable = true;
}

@testable
class MyTestableClass {
  static isTestable = false;
}

const App = function App() {
  const a: number = 111;

  return (
    <>
      <div>{MyTestableClass?.isTestable?.toString()}</div>
      <div className={styles.fzBlue}>{a}</div>
    </>
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
