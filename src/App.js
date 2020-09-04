import React from "react";
import Navbar from "./components/layouts/Navbar";
// import User from "./components/Users/User";
import Users from "./components/Users/Users";
import Axios from "axios";
import "./App.css";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
