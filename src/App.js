import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import "../node_modules/uikit/dist/css/uikit.css";
import Home from './components/Home';
import Quiz from './components/Quiz';
import Topics from './components/Topics';
import AddQandA from './components/AddQandA';
import Videos from './components/Videos';
import JavascriptList from './components/JavascriptList';
import ReactList from './components/ReactList';
import CSharpList from './components/CSharpList';
import AngularList from './components/AngularList';
import ContactUs from './components/ContactUs';
import Error404 from './components/Error404';
import About from './components/About';
import QuizList from './components/QuizList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path='/quizlist'  /> */}
            <Route path='/quiz' render={() => <QuizList quizList={this.props.quizJSList} />} />
            <Route path='/videos' component={Videos} />
            <Route path='/topics' component={Topics} />
            <Route path='/add' component={AddQandA} />
            <Route path='/jslist' component={JavascriptList} />
            <Route path='/reactlist' component={ReactList} />
            <Route path='/csharplist' component={CSharpList} />
            <Route path='/angularlist' component={AngularList} />
            <Route path='/contact' component={ContactUs} />
            <Route path='/about' component={About} />
            <Route component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
App.propTypes = {
  quizJSList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    quizJSList: state.quizJSList
  }
}


export default connect(mapStateToProps)(App);
