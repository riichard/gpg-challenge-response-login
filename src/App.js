import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import logo from './logo.svg';
import './App.css';

//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">Welcome to React</h1>
//        </header>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//      </div>
//    );
//  }
//}


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if(data){
      this.setState({
        result: data,
      })
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    return(
      <div>
		<h1>Hello Self Sovereign World!</h1>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
} 

export default App;
