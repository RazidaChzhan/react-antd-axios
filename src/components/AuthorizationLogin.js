import React from 'react';
import axios from 'axios';
import { Input, Form, Button } from 'antd';
import { Layout} from 'antd';
import '../pages/LogIn';
import HeaderPage from '../pages/headerPage';
import FooterPage from '../pages/footerPage';

const { Content} = Layout; 
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
      <Layout>
        <HeaderPage />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
           <Input placeholder="Email" onChange={this.handleEmailChange} />
          <br/><br/>
          <Input.Password placeholder="input password"  onChange={this.handlePasswordChange}/>
          <br/><br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
          Add User
          </Button>
        </Form>
          </div>
        </Content>
        <FooterPage/>
      </Layout>


      // <div>
      //   <form onSubmit={this.handleSubmit}>
      //     <label>
      //       Email:
      //       <input type="email" name="email" onChange={this.handleEmailChange} />
      //       <br/><br/>
      //       Password:
      //       <input type="password" onChange={this.handlePasswordChange} />
      //       <br/><br/>
      //      </label>
      //     <br/><br/>
      //     <button type="submit">Login</button>
      //   </form>
      // </div>
    )
  }
}