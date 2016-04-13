import React from "react";

export default class Index extends React.Component {
  render() {
    console.log("index");
    return (
      <h4>
      <p>
      Welcome to a web interface for capturing vidi metrics.
      </p>
      
      <p>
      That allows you to transmit Json object via UDP emitter to influx DB
      </p> 
      
      <p>
      that will connect with Graphing instance and will graph your data from Json object 
      </p>
      
      <p>
      If you have ready JSON  go to the  
        <a href="index.html#paste"> Paste Page </a> 
        and just paste it in a text field.   
      </p>
      
      <p>
      If you would like to build JSON object from your data go to the 
        <a href="index.html#builder"> Builder Page. </a>
      </p>
      
      
      </h4>
      
       
    );
  }
}