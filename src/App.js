import 'regenerator-runtime/runtime'
import React,{useEffect, useState} from 'react'
import { login, logout, onSubmit } from './utils'
import getConfig from './config'
import {Navbar, NavDropdown, Nav,Button,Container,Row,Col} from 'react-bootstrap';
import './scss/AppStyle.scss'
import "./global.css"

//Components

//Containers
import Inventory from './Containers/Inventory'
import Options from './Containers/Options'
import Cart from './Containers/Cart'






const { networkId } = getConfig(process.env.NODE_ENV || 'development')


export default function App() {



   const [cartNames,changeNames]=useState([]);
  const [cartQty,changeQty]=useState([]);
  const [cartPrice, changePrice]=useState(0);


     const addItem=(item,price)=>{   
        let itemQty=cartQty;
       

        if(cartNames.includes(item)){
          let index=cartNames.indexOf(item)
          itemQty[index]=itemQty[index]+1

          changeQty(
              cartQty=>[...itemQty]
          )
          changePrice(
            cartPrice+price
          )

        }
        else{
          changeNames(
            cartNames=>[...cartNames,item]
          )
          changeQty(
            cartQty=>[...cartQty,1]
          )
          changePrice(
            cartPrice=>cartPrice+price
          )
        }
      
          
      }

      const clearCart=()=>{
        changeNames([])
        changeQty([])
        changePrice(0)
      }




  return (
    <div className="App bodyBackground">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" bg="transparent">
  <Navbar.Brand href="#home"><h3>GIF Shop</h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <h3><Nav.Link style={{color: "white"}} onClick={(window.accountId!=='')?logout:login} href="#memes">
      {(window.accountId!=='')?window.accountId:'Please Login'}
      </Nav.Link></h3>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<Container>
  <Row>
    <Col>
      <Options addItem={addItem}></Options>
    </Col>
    <Col>
      <Row className="rowSpacing d-flex justify-content-center"><Inventory></Inventory></Row>
      <Row className="rowSpacing d-flex justify-content-center"><Cart clearCart={clearCart} names={cartNames} qtys={cartQty} total={cartPrice}></Cart></Row>
    
    </Col>
  </Row>
</Container>



    </div>


  )
}
