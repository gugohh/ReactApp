import React, { Component } from 'react'
import Product from '../Product'
import product from '../Product/Product'
import products from '../../data.js'

export default class ProductList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {},
      "products":products   //[{p1},{p2},{p3},{p4}]   
    }
  }

  addProduct = () => {
    //const name  = prompt("Introduce ")
    //const desc = prompt("intoduce descripcion")
    const name = "Cocido"
    const desc = "Disfruta del cocido madrileño"
    this.setState({ data: { name, desc } })

    //añadir producto al array
    const newProduct = { name, desc }
    this.setState({ products: [...this.state.products, newProduct] })




  }
  removeAllProducts = () => {

  }
  removeProducts = () => {
    this.setState({ data: {} })
    this.setState({ products: [] })
  }


  paintProducts = () => {
    //[{p1},{p2},{p3},{p4}] this.sate.products
    return this.state.products.map((product,i) => <Product info={product} key={i}/>)
  }

  render() {
    let data = [
      
    ]
    return (
      <>
        <h1>Aqui esta la lista de productos</h1>
        <article>
          {this.paintProducts()}
        </article>
        <button onClick={this.addProduct}>Pulsa</button>
        <button onClick={this.removeProducts}>BorrarTodo </button>
        <h3>Ultimo producto añadido:{this.state.data.name}</h3>
      </>
    )
  }
}
