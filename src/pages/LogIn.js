import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import './LogIn.css';
import { Row, Col } from 'antd';
import { Form, Icon, Input, Button } from 'antd';
import { Layout} from 'antd';
import 'antd/dist/antd.css';
import HeaderPage from './headerPage';
import FooterPage from './footerPage';

const { Content} = Layout;
class NormalLoginForm extends React.Component {
  
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
    console.log (this.props.form.getFieldValue("password"));
    console.log (this.props.form.getFieldValue("username"));
    
    axios.post(`http://localhost:3000/api/users/login`, this.props.form.getFieldValue("password"),
    this.props.form.getFieldValue("username"))
    .then(res => {
        if (res.status === 200){
            const userRes = res.data.user;               
            this.saveDataToStorage(userRes);
        }
    })
    .catch(e => console.log(e));
  }
 

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout>
        <HeaderPage />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Row>
            <Col span={8} offset={9}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
                })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
                })}
                
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
                
                </Form.Item>
                </Form>            
            </Col>
        </Row>
          </div>
        </Content>
        <FooterPage/>
      </Layout>       
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;
