import React, { Component } from 'react'
import MyNavLink from '../../component/MyNavLink'
import Posts from './Posts'
import Tags from './Tags'
import { Route, Routes, NavLink } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>This is Home</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* <a className="list-group-item" href="./home-tags">Tags</a> */}
              <MyNavLink to="/home/tags">Tags</MyNavLink>
            </li>
            <li>
              {/* <a className="list-group-item" href="./home-posts">Posts</a> */}
              {/* 三種寫法: */}
              {/* <MyNavLink to="/home/posts">Posts</MyNavLink> */}
              {/* <NavLink to="/home/posts" className={ ({isActive}) => 'list-group-item' + (isActive ? ' myHighlight' : '') }>Posts</NavLink> */}
              <NavLink to="/home/posts" className='list-group-item'>Posts</NavLink>
            </li>
          </ul>
          {/* 註冊 子 Route */}
          <Routes>
            <Route path="/tags" element={ <Tags /> } />
            <Route path="/posts" element={ <Posts /> } />
            {/* <Route path="/*" element={ <Tags /> } /> */}
          </Routes>
        </div>
      </div>
    )
  }
}
