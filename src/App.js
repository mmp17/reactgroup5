import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Body from './components/BodyComponent';
import Footer from './components/FooterComponent';
import Staff from "./components/StaffComponent";


class App extends Component {

  

  render(){
  

    return (
      <div className="App">
        <Header />
        <Body  />
        <Staff />
        
        <Footer />
       
      </div>
    );

  }
}

export default App;
