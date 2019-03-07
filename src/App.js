import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import "../node_modules/uikit/dist/css/uikit.css";
import Home from './components/Home';
import Quiz from './components/Quiz';
import Topics from './components/Topics';
import Videos from './components/Videos';
import JavascriptList from './components/JavascriptList';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/quiz' component={Quiz} />
            <Route exact path='/videos' component={Videos} />
            <Route exact path='/topics' component={Topics} />
            <Route exact path='/jslist' component={JavascriptList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
