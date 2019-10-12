import React from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";
import { Card, Col, Row } from 'antd';
import { NavLink } from "react-router-dom";
 
export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    this.componentDidMount();
  }  
    componentDidMount() {
    axios.get(`http://localhost:3000/api/articles?limit=10&offset=0 `)
      .then(res => {
        console.log ('articles', res.data.articles);
        this.setState({articles: res.data.articles});
      })
  }

 
  render() {
    const { articles } = this.state;
    return (      
      <div>
            <Helmet>
                <title>All posts</title>
            </Helmet> 
            {articles.map((article) => (
                <div style={{ background: '#ECECEC', padding: '30px' }} key={article.slug}>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Card 
                            title={article.title} 
                            bordered={false}>
                            <p>Дата публикации: {article.createdAt.slice(0, 10)}</p> 
                            <NavLink to={{
                                pathname:'/detail',
                                articleProps:{
                                    updatedAt:article.updatedAt,
                                    createdAt:article.createdAt,
                                    slug:article.slug,
                                    author:article.author,
                                    title:article.title,
                                    description:article.description,
                                    body:article.body,
                                    tagList:article.tagList                                    
                                }
                            }} >Подробнee</NavLink>   
                             </Card>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
     )
  }
}