import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import Dashboard from './containers/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" render={props => <Dashboard {...props} />} ></Route>
        <Redirect from="/" to="dashboard" />
      </Switch>
    </Router>
  );
}

export default App;
