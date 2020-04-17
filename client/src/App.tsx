import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Home } from 'pages/home'
import { Signin } from 'pages/signin'

const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
    </Switch>
  </Router>
)

export default App
