'use strict'

import React from 'react'
import IsJSON from 'is-json'
import Jsonic from 'jsonic'
import Extra from './Extra'

export default class Paste extends React.Component {
  constructor () {
    super()
    
    // declaring initial state
    this.state = { text: '', items: [] }
  } 
  
  handleDelete (itemToBeDeleted) {
    console.log(itemToBeDeleted)
    var newItems = this.state.items.filter((_item) => {
      return _item !== itemToBeDeleted
    })
    
    this.setState({ items: newItems })
  }
  
  /* submit function checking is value JSON, 
  if it is not, converting to it, parsing, using models IsJson and Jsonic, 
  then ussing ajax and POST to send data to server side*/
  handleSubmit (event) {
    event.preventDefault()
    self = this    
    var data = this.state.text
      console.log('1:', data)
    try {
      var goodJson = Jsonic(data) 
    } catch (error) {    
      alert('error : data must be valid JSON: \n'
      + ' 1 example : {"foo":"bar", "red":1} \n'
      + ' 2 example : {foo:"bar", red:1} \n'
      + ' 3 example : foo:bar, red:1 \n'
      + ' ' + error)  
      return false    
    }      
    
    $.ajax({
      type: 'POST',
      url: '/data',
      data: goodJson,
      success: (data) => {
        this.setState({data: data})
        console.log('3:', data)
        
      },
      error: (xhr, status, err) => {
        console.error('/data', status, err.toString())
      }
    }) 
    alert('your data submitted successfuly \n' + data ) 
    var newItems = this.state.items.concat(data)
    this.setState({ text: '', items: newItems}) 
    console.log('submitted data: ', data)      
  }
  
  /* checking for inputs in text area before submitting data 
  and  printing entered values into console*/
  handleChange (event) {
    var text = event.target.value
    console.log(text)
    this.setState({ text: text })
  } 
  
  /* making text field for submitting JSON
  */
  render () {
    var text = this.state.text
    return <div>
    <h4> SUBMIT your data in JSON format here, please :</h4>
    <form onSubmit={this.handleSubmit.bind(this)}>
    
    <textarea name='text' cols='80' rows='10'
    placeholder=
    "{name:'process.heap.used',values:{value:'239'},tags:{pid: '123456',tag: 'some-tag'}}"
    required={true}
    onChange={this.handleChange.bind(this)} value={this.state.text} /><br/>
    
    <button> Submit </button>  
    </form>  
    <Extra 
    handleDelete={this.handleDelete.bind(this)}
    items={this.state.items}/>  
    </div>
  }
}
