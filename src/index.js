import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Profile from './views/profile'
import Home from './views/home'
import Register from './views/register'
import Search from './views/search'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Profile} exact path="/profile" />
        <Route component={Home} exact path="/" />
        <Route component={Register} exact path="/register" />
        <Route component={Search} exact path="/search" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
