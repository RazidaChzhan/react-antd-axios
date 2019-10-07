import React, { Component }from 'react';
import { NavLink } from "react-router-dom";
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;

export default class HeaderPage extends Component {

  render () {
    return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">
                    <NavLink to={{pathname:'/allposts'}}/>
                    Все посты 
                </Menu.Item>
            <Menu.Item key="2"> 
              <NavLink to={{pathname:'/newpost'}}/>
               Добавьте свой пост 
            </Menu.Item>
            <Menu.Item key="3">
                    <NavLink to={{pathname:'/registration'}}/>
                    Регистрация 
            </Menu.Item>
            <Menu.Item key="3">
                    <NavLink to={{pathname:'/login'}}/>
                    Авторизация
            </Menu.Item>
        </Menu>
    </Header>
    );
  }
}
  


