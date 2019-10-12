import React, { Component } from "react";
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

export default class CommentPost extends Component {

  render() {
    const comment = this.props.comment;
    console.log('comment', comment);

    return (
        <Comment
        
        author={comment.author.username}
        avatar={
          <Avatar style={{ backgroundColor: '#87d068' }} icon="user" alt={comment.author.username}/>
          // <Avatar
          //   src=
          //   alt={comment.author.username}
          //   />
        }
        content={comment.body }
        datetime={
          <Tooltip title={moment(comment.createdAt).format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment(comment.createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
          </Tooltip>
        }
      />
    ) 
      
  }
}