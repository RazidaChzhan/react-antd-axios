import React from 'react';
import axios from 'axios';
 
export default class AuthorizationLogin extends React.Component {
  state = {
    email: '',
    password:'',
    token: ''
 }
  handleEmailChange = event => {
    this.setState({ email: event.target.value });    
    }
  handlePasswordChange = event => {   
    this.setState({ password: event.target.value });   
  } 
    
  saveDataToStorage = userRes => {
        console.log('userRes', userRes);
        localStorage.setItem('token', JSON.stringify(userRes.token));
        localStorage.setItem('email', JSON.stringify(userRes.email));
    }

  handleSubmit = event => {
    event.preventDefault();
 
    const user= {
      email: this.state.email,
      password: this.state.password,
    };

    console.log('user', user);
    
    axios.post(`http://localhost:3000/api/users/login`, {user})
    .then(res => {
        if (res.status === 200){
            const userRes = res.data.user;
            this.saveDataToStorage(userRes);
        }
    })
    .catch(e => console.log(e));
  }
 
  render() {
    return (  
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" onChange={this.handleEmailChange} />
            <br/><br/>
            Password:
            <input type="password" onChange={this.handlePasswordChange} />
            <br/><br/>
           </label>
          <br/><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}