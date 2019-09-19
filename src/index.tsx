import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import TypesTest from './component/types-test';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div>
          <Header />

          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={TypesTest} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </Router>
    </React.StrictMode>
  );
}

function Header() {
  return (
    <ul>
      <li><Link to="/">TypesTest</Link></li>
    </ul>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
