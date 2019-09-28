import React, { Component }from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Footer } = Layout;
export default class FooterPage extends Component {

  render () {
    return (
        <Footer style={{ textAlign: 'center' }}>Chzhan Razida, ©2019 </Footer>
    );
  }  
}
  