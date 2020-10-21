import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hezo from "./components/Hezo";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Post from './containers/Post';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
        <Hezo/>
        <Switch>
        	<Route exact path="/" component={Home}></Route>
        	<Route exact path="/about" component={About}></Route>
          <Route exact path="/contact-us" component={Contact}></Route>
          <Route exact path="/post/:slug" component={Post}></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;