import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'components/Navbar/index'
import Login from '../../components/Login/login'
import Signup from '../../components/SignUp/signup'
import Home from '../../components/Home/home'
import Contact from '../../components/Contact/contact'
import Calendar from '../../components/Calendar/calendar'
import History from '../../components/History/history'
import Communication from '../../components/Communication/communication'
import Notification from '../../components/Notification/notification'
//import GlobalStyle from '../../global-styles';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Reservation from '../../components/Reservation/reservation';
var ReactDOM = require('react-dom');


export default function App() {
  return (
   <Router>
    <div>
      <Switch>
        <Route path='/' exact render={props =>
        <div>
          <Navbar />
          <Login />
        </div>
        } />
         <Route path='/login' exact render={props =>
        <div>
          <Navbar />
          <Login />
        </div>
        } />
         <Route path='/signup' exact render={props =>
        <div>
          <Navbar />
          <Signup />
        </div>
        } />
        <Route path='/home' exact render={props =>
        <div>
          <Navbar />
          <Home/>
        </div>
        } />
        <Route path='/on_my_way' exact render={props =>
        <div>
          <Navbar />
         
        </div>
         } />
          <Route path='/notification' exact render={props =>
        <div>
          <Navbar />
         <Notification/>
        </div>
         } />
          <Route path='/reservation' exact render={props =>
        <div>
          <Navbar />
         <Reservation/>
        </div>
         } />
          <Route path='/communication' exact render={props =>
        <div>
          <Navbar />
         <Communication/>
        </div>
         } />
          <Route path='/history' exact render={props =>
        <div>
          <Navbar />
         <History/>
        </div>
         } />
          <Route path='/contact' exact render={props =>
        <div>
          <Navbar />
         <Contact/>
        </div>
         } />
          <Route path='/cart' exact render={props =>
        <div>
          <Navbar />
         
        </div>
         } />
          <Route path='/calendar' exact render={props =>
        <div>
          <Navbar />
         <Calendar/>
        </div>
         } />
      </Switch>
    </div>
   </Router>
  
  );
}
ReactDOM.render(App,document.getElementById('app'))