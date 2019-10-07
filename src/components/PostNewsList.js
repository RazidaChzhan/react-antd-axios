import React from 'react';
import axios from 'axios';
import { Input, Form, Button } from 'antd';
import '../pages/LogIn.css';
import { Layout} from 'antd';
import 'antd/dist/antd.css';
import HeaderPage from '../pages/headerPage';
import FooterPage from '../pages/footerPage';

const { TextArea } = Input;
const { Content} = Layout;
 
export default class PostNewsList extends React.Component {
  state = {
    title: '',
    description:'',
    body: '',
    tagList: ['teg']
  }
  handleTitleChange = event => {
    this.setState({ title: event.target.value });    
    }
  handleDescriptionChange = event => {   
    this.setState({ description: event.target.value });   
  }
  handleBodyChange = event => {  
    this.setState({ body: event.target.value });
  }
  handleTaglistChange = event => {  
    this.setState({ tagList: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();
 
    const article= {
      title: this.state.title,
      description: this.state.description,
      body: this.state.body,
      tagList: this.state.tagList
    };

    
    console.log('articles', article);
    let authT;
    let token = localStorage.getItem ('token');
    console.log ('token', token);
    if (token.charAt(0) === '"' && token.charAt(token.length -1) === '"')
    {
        console.log(token.substr(1,token.length -2));
        authT = token.substr(1,token.length -2)
    }

    axios.post(`http://localhost:3000/api/articles`, {article}, {'headers': {'Authorization': `Token ${authT}`}})
    .then(res => {
        console.log('addArticle', res);
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
        <Input placeholder="Title" onChange={this.handleTitleChange}/>
        <br/><br/>
        <Input placeholder="Description" onChange={this.handleDescriptionChange}/>
        <br/><br/>
        <TextArea rows={4} placeholder="enter text of post" onChange={this.handleBodyChange} />
        <br/><br/>
        <Input placeholder="Taglist" onChange={this.handleTaglistChange}/>
        <br/><br/>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Add post
        </Button>
        </Form>
        </div>
      </Content>
      <FooterPage/>
    </Layout>    
    )
  }
}