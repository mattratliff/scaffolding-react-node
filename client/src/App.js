import React, { Component } from 'react';
import logo from './ExelarationCenter.png';
import './css/site-layout.css';

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
      <div className="App">
        <div class="header-options">
          <header className="main-head main-head-style"></header>
          <nav className="sub-head">
            <div className="sub-header-left">
              <img class="logo" src={logo}/>
            </div>
            <div className="sub-header-right">
              <button>Home</button>
              <button>Projects</button>
              <button>Blogs</button>
              <button>About Me</button>
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
              <h1>Main article area</h1>
              <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
              
          </article> 
          <aside className="side">Sidebar</aside>
          <div className="ad">Advertising</div>
          <footer className="main-footer">The footer</footer>
        </div>
      </div>

    )
  }
}