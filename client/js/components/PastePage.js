import React from "react";
import Extra from './Extra'

export default class Paste extends React.Component {
  constructor () {
    super();
    this.state = { text: '', items: [] };
  }
  
  handleDelete (itemToBeDeleted) {
    console.log(itemToBeDeleted);
    var newItems = this.state.items.filter( (_item) => {
      return _item != itemToBeDeleted
    } )
    
    this.setState({ items: newItems });
  }
  
  handleSubmit (event) {
    event.preventDefault();
    self = this
    console.log(this.state)
    var data = this.state.text
    $.ajax({
      type: 'POST',
      url: this.props.url,
      data: data,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    })      
  }
  
  handleChange (event) {
    var text = event.target.value;
    console.log(text);
    this.setState({ text: text });
  }
  
  render () {
    return  <div>
    <label> SUBMIT your data in json format here, please :</label>
    <form onSubmit={this.handleSubmit.bind(this)}>
    
    <textarea name="text" cols="80" rows="10" 
    placeholder=
         "{name:'process.heap.used',values:{value:'239'},tags:{pid: '123456',tag: 'some-tag'}}"
    onChange={this.handleChange.bind(this)} value={this.state.text} /><br/>

    <button> Submit </button>
  
    </form>
    <Extra 
    handleDelete={this.handleDelete.bind(this)}
    items={this.state.items}/>
    </div>;
  }
}