import React, { Component }from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Registration from './pages/registration';
import Authorization from './pages/authorazation';
import AddPost from './pages/addPost';
import NotFound from './pages/notFound';
import WrappedNormalLoginForm from './pages/LogIn';
import MainPage from './pages/mainPage';
export default class App extends Component  {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/> 
          <Route exact path="/allposts" component={MainPage}/> 
          <Route path="/registration" component={Registration} />
          <Route path="/authorization" component={ Authorization} />
          <Route path="/login" component={WrappedNormalLoginForm} />
          <Route path="/newpost" component={AddPost} />
          <Route component={NotFound}/>                        
        </Switch>
      </Router>
    );
  }
}