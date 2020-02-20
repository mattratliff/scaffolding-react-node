import React, { Component } from 'react';
import logo from './assets/ExelarationCenter.png';
import './css/site-layout.css';

import Home from './Home/Home'
import Projects from './Projects/Projects'
import Blogs from './Blogs/Blogs'
import About from './About/About'

import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI() {
    fetch("http://localhost:9004/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div class="header-options">
          <header className="main-head main-head-style"></header>
          <nav className="sub-head">
            <div className="sub-header-left">
              <img class="logo" src={logo}/>
            </div>
            <div className="sub-header-right">
              <button><Link class="link-nav" to='/home'>Home</Link></button>
              <button><Link class="link-nav" to='/projects'>Projects</Link></button>
              <button><Link class="link-nav" to='/blogs'>Blogs</Link></button>
              <button><Link class="link-nav" to='/about'>About Me</Link></button>
            </div>
            </nav>
        </div>
        <div className="wrapper">
          <nav className="main-nav">
              <ul>
                  <li><a href="">Side Nav 1</a></li>
                  <li><a href="">Side Nav 2</a></li>
                  <li><a href="">Side Nav 3</a></li>
              </ul>
          </nav>
          <article className="content">
          <Switch>
          <Route exact path= "/" render={() => (
                  <Redirect to="/home"/>
                )}/>
                 <Route exact path='/home' component={Home} />
                 <Route exact path='/projects' component={Projects} />
                 <Route exact path='/blogs' component={Blogs} />
                 <Route exact path='/about' component={About} />
          </Switch>
          </article> 
          <aside className="side">Sidebar</aside>
          <div className="ad">Advertising</div>
          <footer className="main-footer">The footer</footer>
        </div>
      </div>
      </Router>
    )
  }
}