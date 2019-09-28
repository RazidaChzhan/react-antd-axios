import React, { Component }from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import PostList from '../components/PostList';
import HeaderPage from './headerPage';
import FooterPage from './footerPage';

const { Content } = Layout;

export default class MainPage extends Component {

  render () {
    return (
      <Layout>
        <HeaderPage/>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <PostList/>
          </div>
        </Content>
        <FooterPage/>
      </Layout>
    );
  }
}