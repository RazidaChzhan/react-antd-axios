import React from 'react';
import axios from 'axios';
 
export default class UserRegistration extends React.Component {
  state = {
    username: '',
    email:'',
    password: ''
  }
  handleUserNameChange = event => {
    this.setState({ username: event.target.value });    
    }
  handleEmailChange = event => {   
    this.setState({ email: event.target.value });   
  }
  handlePasswordChange = event => {  
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
 
    const user= {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    
    console.log('user', user);


    axios.post(`http://localhost:3000/api/users`, {user})
    .then(res => {
        console.log('addUser', res);
    })
    .catch(e => console.log(e));

    // axios.post(`http://localhost:3000/api/users/login`, {"user":{"email":"test@test.ru","password":"123123123"}})
    // .then(res => {
    //     console.log('loginUser', res);
    // })
    // .catch(e => console.log(e));
  }
 
  render() {
    return (  
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            User Name:
            <input type="text" name="username" onChange={this.handleUserNameChange} />
            <br/><br/>
            Email:
            <input type="email" name="email" onChange={this.handleEmailChange} />
            <br/><br/>
            Password:
            <input type="password"  onChange={this.handlePasswordChange} />
          </label>
          <br/><br/>
          <button type="submit">Add user</button>
        </form>
      </div>
    )
  }
}