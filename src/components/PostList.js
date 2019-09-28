import React from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";
import { Card, Col, Row } from 'antd';
 
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
        const posts= res.data.articles;
        console.log ('posts', posts);
        this.setState({articles: res.data.articles});
      })
  }
   
  render() {
    const { articles } = this.state;
    console.log('articles', articles);
    return (      
      <div>
            <Helmet>
                <title>All posts</title>
            </Helmet> 
            {articles.map(post => (
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Card 
                            title={post.title} 
                            bordered={false}>
                            <p>Дата публикации: {post.createdAt.slice(0, 10)}</p> 
                             </Card>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
     )
  }
}