// dependencies
import React, { Component } from 'react'

// user files
import './App.css'
import Form from './components/Form.js'
import Order from './components/Order.js'

export default class App extends Component {
  state = {
    orders: []
  }

// addOrder function -> it takes in an order & sets the state to include that newly added order
  addOrder = (order) => {
    this.setState({
      orders: [...this.state.orders, order]
    })
  }

  render() {
    const orders = this.state.orders.map( (order, idx) => {
      return <Order key={idx} {...order} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./images/logo.png')} className="App-logo" alt="logo" />
        </header>

        <Form addOrder={this.addOrder}/>

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            { orders }
          </div>
        </div>
      </div>
    )
  }
}

// export default App - moved above to class delcaration
