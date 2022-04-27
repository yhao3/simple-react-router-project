import React, { Component } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              {/* 1. 原生 html 中，靠 <a> 標籤來跳轉不同頁面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 2. 在 React 中，靠路由連結來實現切換元件 */}

              {/* 使用 Bootstrap */}
              {/* <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink> */}
              {/* 使用自定義 css */}
              <NavLink className={ ({isActive}) => 'list-group-item' + (isActive ? ' myHighlight' : '') }  to="/about">About</NavLink>
              <NavLink className={ ({isActive}) => 'list-group-item' + (isActive ? ' myHighlight' : '') }  to="/home">Home</NavLink>
              
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}