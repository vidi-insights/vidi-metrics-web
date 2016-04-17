import React from "react"
import IsJSON from 'is-json'
import Jsonic from 'jsonic'

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
    
    var data = this.state.text
    if (IsJSON(data) === false) {
      var foo = Jsonic.stringify(data)
      var goodJson = Jsonic(foo)
      
      console.log('1:', goodJson)      
    }
    
    $.ajax({
      type: 'POST',
      url: '/data',
      data: goodJson,
      success: (data) => {
        this.setState({data: data});
        console.log("2:",  data)
        
      },
      error: (xhr, status, err) => {
        console.error('/data', status, err.toString());
      }
    }) 
    this.setState({ text: ''}); 
    var newItems = this.state.items.concat(data);  
    console.log("submitted form has value: ", data);
        
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
    required={true}
    onChange={this.handleChange.bind(this)} value={this.state.text} /><br/>
    
    <button> Submit </button>
    
    </form>
    
    </div>;
  }
}