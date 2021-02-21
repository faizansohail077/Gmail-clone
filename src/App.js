import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mail from './Screens/Mail/Mail';
import EmailList from './Screens/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';
import { useSelector } from 'react-redux';
function App() {
  const { sendMessageIsOpen } = useSelector(state => state.MailReducer)
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
        {
          sendMessageIsOpen ? <SendMail /> : ""
        }
      </div>
    </Router>
  );
}

export default App;
