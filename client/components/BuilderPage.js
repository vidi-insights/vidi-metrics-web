'use strict'

import React from 'react'
import IsJSON from 'is-json'
import Jsonic from 'jsonic'

export default class Paste extends React.Component {
  constructor () {
    super()
    
  // declaring initial state
  
    this.state = { input1: '', items: [] }
    this.state = { input2: '', items: [] }
    this.state = { input3: '', items: [] }
  } 
   
  handleDelete (itemToBeDeleted) {
    console.log(itemToBeDeleted)
    var newItems = this.state.items.filter((_item) => {
      return _item !== itemToBeDeleted
    })
    
    this.setState({ items: newItems })
  }
  
  /* submit function checking is value JSON 
  if it is not converting to it and parsing, using models IsJson adn Jsonic, 
  then ussing ajax and POST to send data to server side*/
  
  handleSubmit (event) {
    event.preventDefault()
    self = this      
    var name = this.state.input1 
    var value = this.state.input2 
    var tag = this.state.input3
    var total = {name, value, tag}
    if (IsJSON(total) === false) {
      try {
      var foo = Jsonic.stringify(total)
      var goodJson = Jsonic(foo)  
      console.log('1:', goodJson)      
    }
    //try and catch to alert error message
      catch (error) {    
      alert('error:data mus be valid JSON: \n' 
      + ' 1 example : { "foo":"bar", "red":1 } \n'
      + ' 2 example : { foo:"bar", red:1 } \n'
      + ' 3 example : foo:bar, red:1 \n'
      + ' ' + error)   
      return false     
    }
    }
    // sending data to server side using ajax and POST
    $.ajax({
      type: 'POST',
      url: '/data',
      data: goodJson,
      success: (data) => {
        this.setState({data: data})
        console.log('2:', data)
      },
      error: (xhr, status, err) => {
        console.error('/data', status, err.toString())    
      }
    })
    // alert pop-up message for successful submission
    alert('your data submitted successfuly \n' + name + value + tag ) 
    // clearing inputs values for the text fields after submission  
    this.setState({ input1: ' ', input2: ' ', input3: ' '});  
    // printing submitted data in the console
    console.log('submitted data ', total);    
  }
  
  /*checking for inputs in text area before submitting data 
  and  printing entered values into console*/
  
  handleChange (name, event) {
    var change = {}
    change[name] = event.target.value
    this.setState(change)
    console.log(change)    
  }
  
  /*making input 3 fields for buildng JSON, for: name, values, tags.
  as shown in examples in text fields */
  
  render () {
    var total = this.state.input1 + ' ' + this.state.input2 + ' ' + this.state.input3
    return <div>
    <form onSubmit={this.handleSubmit.bind(this)}>
    <h4>Enter your metrics name here:</h4>
    <textarea name='input1' cols='40' rows='2' 
    placeholder = 'myName' required={true}
    onChange={this.handleChange.bind(this, 'input1')} value={this.state.input1} />
    
    <h4>Enter your values in such format:<br/>
    value1: number, value2: number</h4> 
    <textarea name='input2' cols='40' rows='4'
    placeholder = ' tweets: 1213324' required={true}
    onChange={this.handleChange.bind(this, 'input2')} value={this.state.input2} />
    
    <h4>Enter your tags in such format:<br/>
    tag1: myTag1, tag2: myTag2</h4>
    <textarea name= 'input1' cols='40' rows='4'
    placeholder = ' pid: 123456, tag: some-tag' required={true}
    onChange={this.handleChange.bind(this, 'input3')} value={this.state.input3} /><br/>
    
    <button> Submit </button>
    
    </form>
    </div>
  }
}
