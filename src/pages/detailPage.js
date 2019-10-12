import React, { Component }from 'react';
import { Layout} from 'antd';
import 'antd/dist/antd.css';
import HeaderPage from './headerPage';
import FooterPage from './footerPage';
import DetailPost from '../components/detailPost';

const { Content} = Layout;

export default class DetailPage extends Component {

  render () {
    // console.log('detailPage', this.props.location.articleProps);
    const details = this.props.location.articleProps;
    return (
      <Layout>
        <HeaderPage/>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <DetailPost details = {details}/>
          </div>
        </Content>
        <FooterPage/>
      </Layout>
    );
  }  
}