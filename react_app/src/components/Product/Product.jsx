import React, { Component } from 'react'

export default class product extends Component {

  constructor(props) {
    super(props)

    this.state = {
      empresa: this.props.info.empresa || "Vendehumo S.A"
    }
  }
  
  render() {
    const { name, desc , empresa} = this.props.info
    const Empresa = this.state.empresa
    return (
      <section>
        <h3>Producto {name}</h3>
        <p>{desc}</p>
        <p>Empresa:{empresa}</p>
      </section>
    )
  }
}
