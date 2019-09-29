import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import TypesTest from './component/types-test';
import WebAnimation from './component/web-animation';
import DynamicCharts from './component/dynamic-charts';
import HooxTest from './component/hoox-test';

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
                <Route exact path="/web-animation" component={WebAnimation} />
                <Route exact path="/dynamic-charts" component={DynamicCharts} />
                <Route exact path="/hoox" component={HooxTest} />
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
      <li><Link to="/web-animation">WebAnimation</Link></li>
      <li><Link to="/dynamic-charts">DynamicCharts</Link></li>
      <li><Link to="/hoox">hoox</Link></li>
    </ul>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
