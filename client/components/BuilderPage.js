import React from "react";
import IsJSON from 'is-json'
import Jsonic from 'jsonic'

export default class Paste extends React.Component {
  constructor () {
    super();
    this.state = { input1: '', items: [] };
    this.state = { input2: '', items: [] };
    this.state = { input3: '', items: [] };
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
    
    
    var name = this.state.input1 
    var value = this.state.input2 
    var tag = this.state.input3
    var valueJasonic = Jsonic.stringify(value)
    var tagJasonic = Jsonic.stringify(tag)
    var values = Jsonic(valueJasonic)
    var tags = Jsonic(tagJasonic)
    var total = {name, values, tags}
    
    
    if (IsJSON(total) === false) {
      var foo = Jsonic.stringify(total)
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
    this.setState({ input1: ' ', input2: ' ', input3: ' '});  
    console.log("submitted form has value: ", total);    
  }
  
  handleChange (name, event) {
    var change = {};
    change[name] = event.target.value
    this.setState(change);
    console.log(change);
  
  }
  
  render () {
     var total = this.state.input1 + ' ' +  this.state.input2 + ' ' + this.state.input3;
    return  <div>
    <h4> SUBMIT your data here, please :</h4>
    <form onSubmit={this.handleSubmit.bind(this)}>
    
    <label>Enter your metrics name here:</label><br/>
    <textarea name="input1" cols="40" rows="2" 
    placeholder = " myName"
    onChange={this.handleChange.bind(this, 'input1')} value={this.state.input1} /><br/>
    
    <label>Enter your values in such format: value1: number, value2: number</label> <br/>
    <textarea name="input2" cols="40" rows="4"
    placeholder = " tweets: 1213324"
    onChange={this.handleChange.bind(this, 'input2')} value={this.state.input2} /><br/>
    
    <label>Enter your tags in such format: tag1: myTag1, tag2: myTag2</label><br/>
    <textarea name= "input1" cols="40" rows="4"
    placeholder = " pid: 123456, tag: some-tag"
    onChange={this.handleChange.bind(this, 'input3')} value={this.state.input3} /><br/>
    
    <button> Submit </button>
  
    </form>
    </div>;
  }
}