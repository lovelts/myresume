import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Start from './pages/start/Start'
import Resume from './pages/resume/Resume'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/" component={Start} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
