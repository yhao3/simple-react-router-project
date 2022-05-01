import React, { Component } from 'react'

export default class Posts extends Component {
  render() {
    return (
      <div>
          <ul>
            <li>
              <a href="/post1">post-01</a>
            </li>
            <li>
              <a href="/post2">post-02</a>
            </li>
            <li>
              <a href="/post/3">post-03</a>
            </li>
          </ul>
      </div>
    )
  }
}
