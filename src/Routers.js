import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pages from './pages';

class Routers extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Home} />
        </Switch>
      </Router>
    );
  }

}

export default Routers;
