import React, { Component } from 'react';
import axios from 'axios';
import TotalCases from './components/totalcase.js';
import './app.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      data : []
    }
  }
  componentDidMount(){
      axios.get("http://localhost:5000/").then(res => {
        this.setState({
          data : res.data.split(',')
        })
      }
         
      ).catch(err => {console.log(err)});
  }
  render(){
  return (
    <div className="App">
      
            <TotalCases Cases = {this.state.data[0]} Deaths = {this.state.data[1]} Recovered = {this.state.data[2]}/>
   
       
    </div>
  );
}
}

export default App;
