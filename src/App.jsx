import React from 'react';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import {
  Provider,
} from 'unstated';

import './assets/css/style.scss';
import { List, Add } from './pages';

function Application() {
  return (
    <Provider>
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={List} />
            <Route path="/add" component={Add} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default hot(module)(Application);
