import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
// import Home from './components/views/home';
import Profile from './components/views/profile';
export default (
  <Route path='/' component={App}>
    {/* <IndexRoute component={Home} /> */}
    <Route path='profile' component={Profile} />
    {/* <Route path='*' component={Home} /> */}
  </Route>
);