import React, { Component } from 'react'
import Header from './components/Home/Header';
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';
import { HOME, EDITOR, SETTING, LOGIN, REGISTER } from './constanst/router';
import Profile from './components/Home/Profile';
import Editor from './components/Home/Editor';
import Setting from './components/Home/Setting';
import Login from './components/Home/Login';
import Register from './components/Home/Register';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Routers>
          <Header />
          <Switch>
            <Route path={HOME} exact={true} component={Profile} />
            <Route path={EDITOR} exact={true} component={Editor} />
            <Route path={SETTING} exact={true} component={Setting} />
            <Route path={LOGIN} exact={true} component={Login} />
            <Route path={REGISTER} exact={true} component={Register} />
            <Route path={SETTING} exact={true} component={Setting} />
          </Switch>
        </Routers>
      </React.Fragment>
    )
  }
}
