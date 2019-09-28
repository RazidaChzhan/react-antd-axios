import React from 'react';
import axios from 'axios';
 
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" onChange={this.handleTitleChange} />
            <br/><br/>
            Description:
            <input type="text" name="description" onChange={this.handleDescriptionChange} />
            <br/><br/>
            Body:
            <input type="text"  name="body" onChange={this.handleBodyChange} /> 
            <br/><br/>
            Taglist:
            <input type="text" name="taglist" onChange={this.handleTaglistChange} />
          </label>
          <br/><br/>
          <button type="submit">Add article</button>
        </form>
      </div>
    )
  }
}