import React, { Component } from "react";
import Main from "./component/main";
import Header from "./component/header";
import Footer from "./component/footer";
import data from "./component/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
  import SelectedBeast from "./component/SelectedBeast";
 

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dataBeast: data,
      selectedBeast: {}, //should be filled when we select the desired beast
      showModal: false
     }
  }
  displayModal=(beast, )=>{
 this.setState({
  showModal:true,
  selectedBeast:beast,
  })  }
 handleClose=()=>{
  this.setState({
   showModal:false
  })  }

    render() {
    return (
      <div key='appKey'>
        <Header />
        <Main data={this.state.dataBeast} displayModal={this.displayModal} />
        <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast}/> 
        <Footer />
      </div>
      
    )
  }

}

export default App;