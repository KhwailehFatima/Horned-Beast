import React from "react";
import Main from "./component/main";
import Header from "./component/header";
import Footer from "./component/footer";
import data from "./component/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <>
        <Header />
        <Main data={data} />
        <Footer />
      </>
    )
  }
}

export default App;