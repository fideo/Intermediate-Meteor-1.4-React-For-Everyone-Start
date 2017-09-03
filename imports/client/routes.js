import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';
import {render} from 'react-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import App from './App';
import About from './pages/About';
import Admin from './Admin';

Meteor.startup(() => {
  render(
      <Router history={browserHistory}>
        <Route path ="/" component={MainLayout} >
          <IndexRoute component={App}/>
          <Route path ="/about" component={About} />
        </Route>
        <Route path ="/admin" component={AdminLayout} >
          <IndexRoute component={Admin}/>
        </Route>
      </Router>,
      document.getElementById('render-target'));
});
