// dependencies
import React, { Component } from 'react'

// user files
import ProteinForm from './ProteinForm'
import FillingForm from './FillingForm'
import ToppingForm from './ToppingForm'
import SideForm from './SideForm'

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: []
}

export default class Form extends Component {
  state = {
    ...DEFAULT_STATE
  }

  handleSubmit = (event) => {
    event.preventDefault()
    document.getElementById("order-form").reset()
      if (this.state.protein.length === 0 && this.state.fillings.length === 0 && this.state.toppings.length === 0 && this.state.sides.length === 0) {
        console.log('you need to order something')
      }
      else {
        this.props.addOrder(this.state)
        this.setState({...DEFAULT_STATE})
      }
  }

  handleChange = (event) => {
    const itemType = event.target.name
    const item = event.target.value

    !this.state[`${itemType}`].includes(item) ?
      this.setState({[itemType]: this.state[`${itemType}`].concat(item)})
        :
      this.setState({[itemType]: this.state[`${itemType}`].filter(ingr => ingr !== item)
      })
  }

  render() {
    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Order Form</h1>
        <form className="ui form" id="order-form" onSubmit={this.handleSubmit}>
          <ProteinForm handleChange={this.handleChange} />

          <FillingForm handleChange={this.handleChange} />

          <ToppingForm handleChange={this.handleChange} />

          <SideForm handleChange={this.handleChange} />

          <br />

          <button className="ui blue big button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

// export default Form - moved above to class delcaration
