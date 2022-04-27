import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('...About 路由元件收到的 props 是: ', this.props);
    return (
      <h3>This is About</h3>
    )
  }
}
