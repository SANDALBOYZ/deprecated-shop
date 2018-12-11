import React from 'react'
import { Link } from 'gatsby'

class Layout extends React.Component {
  state = {}

  render () {
    const { children } = this.props

    return (
      <>
        <header>Header</header>
        <nav>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </ul>
        </nav>
        <div>{this.state.counter}</div>
        <button onClick={this.onClick}>Click Me!</button>
        <div>
          {children}
        </div>
      </>
    )
  }
}

export default Layout
