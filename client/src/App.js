import React, { Component } from 'react';
import logo from './ExelarationCenter.png';
import './App.css';

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
        <div className="wrapper">
          <header className="main-head">The header</header>
          <nav className="sub-head">
            <div><button>Home</button></div>
            <div><button>About Us</button></div>
          </nav>
          <nav className="main-nav">
              <ul>
                  <li><a href="">Nav 1</a></li>
                  <li><a href="">Nav 2</a></li>
                  <li><a href="">Nav 3</a></li>
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