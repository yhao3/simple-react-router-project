import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
      console.log(this.props);
    return (
        <NavLink className={ ({isActive}) => 'list-group-item' + (isActive ? ' myHighlight' : '') } {...this.props} />
    )
  }
}
