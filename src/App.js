import React from "react";
import Main from "./component/main";
import Header from "./component/header"
import Footer from "./component/footer";
import data from "./component/data.json"

class App extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <>
        <Header />
        <Main item={data} />
        <Footer />
      </>
    )
  }
}

export default App;