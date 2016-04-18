'use strict'

import React from 'react'
import IsJSON from 'is-json'
import Jsonic from 'jsonic'
import Extra from './Extra'

export default class Paste extends React.Component {
  constructor () {
    super()
    this.state = { text: '', items: [] }
  }  
  handleDelete (itemToBeDeleted) {
    console.log(itemToBeDeleted)
    var newItems = this.state.items.filter((_item) => {
      return _item !== itemToBeDeleted
    })
    
    this.setState({ items: newItems })
  }
  
  handleSubmit (event) {
    event.preventDefault()
    self = this
    
    var data = this.state.text
    if (IsJSON(data) === false) {
      try {
        var foo = Jsonic.stringify(data)
        var goodJson = Jsonic(foo)    
      console.log('1:', goodJson)
    } catch (error) {    
      alert('error : data mus be valid JSON: \n'
      + ' 1 example : { "foo":"bar", "red":1 } \n'
      + ' 2 example : { foo:"bar", red:1 } \n'
      + ' 3 example : foo:bar, red:1 \n'
      + ' ' + error)  
      return false    
    }      
    }    
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
    var newItems = this.state.items.concat(data);
    this.setState({ text: '', items: newItems}) 
    console.log('submitted form has value: ', data)      
  }
  
  handleChange (event) {
    var text = event.target.value
    console.log(text)
    this.setState({ text: text })
  } 
  
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
