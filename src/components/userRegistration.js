import React from 'react';
import axios from 'axios';
import { Input, Tooltip, Icon,  Form, Button } from 'antd';
import { Layout} from 'antd';
import '../pages/LogIn';
import HeaderPage from '../pages/headerPage';
import FooterPage from '../pages/footerPage';

const { Content} = Layout; 
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
  }
 
  render() {
    return (  
      <Layout>
        <HeaderPage />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
           <Input
             placeholder="Enter your username"
             prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
             suffix={
            <Tooltip title="Extra information">
            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
            }
            onChange={this.handleUserNameChange}
            />
          <br/><br/>
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
    )
  }
}