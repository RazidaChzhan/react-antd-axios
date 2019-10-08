import React, { Component }from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import UserRegistration from './components/userRegistration';
import NotFound from './pages/notFound';
import MainPage from './pages/mainPage';
import PostNewsList from './components/PostNewsList';
import AuthorizationLogin from './components/AuthorizationLogin';
export default class App extends Component  {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/> 
          <Route exact path="/allposts" component={MainPage}/> 
          <Route path="/registration" component={UserRegistration} />
          <Route path="/login" component={AuthorizationLogin} />
          <Route path="/newpost" component={PostNewsList} />
          <Route component={NotFound}/>                        
        </Switch>
      </Router>
    );
  }
}