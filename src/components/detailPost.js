import React, { Component } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { Card, Col, Row} from 'antd';
import { Input, Form, Button } from 'antd';
import CommentPostList from "./commentPostList";


export default class DetailPost extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            body: null,
            article: this.props.details,
            comments: []
        };
        this.setComments();
    }

    setComments = () => {
        const url = 'http://localhost:3000/api/articles/'+ this.state.article.slug +'/comments';
        axios.get(url).then(res => {
            this.setState({comments: res.data.comments});
        });
    }
   
    handleBodyChange = event => {
        this.setState({ body: event.target.value });    
    }
    
    handleSubmit = event => {
        event.preventDefault();
        // 1.Получить коммент
        const comment = {
            body: this.state.body
        };

        console.log('comment', comment);

        // 2. Получить статью из пропса
        // const article = this.props.details;

        console.log('article', this.state.article);
        
        // 3. Добавить в статью коммент
           
        // 4. Отправить статью на сервер post запрос
        let authT;
        let token = localStorage.getItem ('token');
        console.log ('token', token);
        if (token.charAt(0) === '"' && token.charAt(token.length -1) === '"')
        {
            console.log(token.substr(1,token.length -2));
            authT = token.substr(1,token.length -2)
        }  

        const url = 'http://localhost:3000/api/articles/'+ this.state.article.slug +'/comments';

        axios.post(url, {comment}, {'headers': {'Authorization': `Token ${authT}`}})
        .then(res => {
        console.log('addComment', res);
        })
        .catch(e => console.log(e));

        this.setComments();
    }
       
     
    render() {
        const details = this.props.details
       
        const {comments} = this.state;
      
        return(
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={24}>
                    <Col span={24}>
                        <Card>                            
                            <h3>{details.title}</h3>
                            <p>{details.body}</p>                           
                            <p>Дата публикации: {details.createdAt.slice(0, 10)}</p>                            
                            <p><NavLink to={{pathname:'/'}}>Назад</NavLink></p>                                                       
                        </Card>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <Card>                            
                            <h3>Добавьте свой комментарий</h3>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                            <Input placeholder="enter text of comment" onChange={this.handleBodyChange} />
                            <br/><br/>       
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Add comment
                            </Button>
                            </Form>                                           
                        </Card>
                    </Col>
                </Row>
                
                <Row gutter={24}>
                    <Col span={24}>
                        <Card>
                            {comments.map(comment => (
                                <CommentPostList comment = {comment} key = {comment.id}/>
                            ))}                 
                        </Card>
                    </Col>
                </Row> 
          
        </div>
        )
    }
   
}
