import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mail from './Screens/Mail/Mail';
import EmailList from './Screens/EmailList/EmailList';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <div>
            <Sidebar />
          </div>
          <Switch>
            <div>
              <Route path="/mail"  >
                <Mail />
              </Route>
              <Route path="/" exact >
                <EmailList />
              </Route>
            </div>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
