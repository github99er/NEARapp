import React, { Component } from 'react';
import {Container,Row,Col,Card,ListGroup,Button} from 'react-bootstrap';
import '../css/blockshopUtils.css'

class Cart extends Component {
 


    startTransaction=async()=>{
        let CheckoutList = this.props.names
        let balance
        let total=this.props.total*(10**6);


        await window.account.state().then(res=>{
            balance=res.amount
        })

        if (balance>total) {
        window.account.sendMoney('farm.testnet',this.props.total*10000)
        .then(()=>{
            window.contract.deliverProducts({checkout:CheckoutList})
        })
        .then(()=>{this.props.clearCart()})
    }
    else{
        console.log('not enough funds')
    }
    }



    render() {
        return (
            
            <div  className= "sticky-top InventoryContainer d-flex justify-content-center">
             
                <Card style={{width:'18rem'}}>
                <Card.Header><header>Cart</header></Card.Header>
                <ListGroup>
                { this.props.names.map(x=>{
               
                    this.total=this.total+this.props.price;
                return <ListGroup.Item key={x}>{`${x}:${this.props.qtys[this.props.names.indexOf(x)]}`}</ListGroup.Item>
                })}
                <ListGroup.Item><Card.Header><b>Total: {this.props.total}</b> </Card.Header></ListGroup.Item>
                <ListGroup.Item><Card.Header>Refresh the page after clicking submit! </Card.Header></ListGroup.Item>
                <ListGroup.Item><Row><Col  className='d-flex justify-content-center'><Button style={{backgroundImage: "linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%)"}} onClick={this.props.clearCart}>Clear Cart</Button></Col><Col  className='d-flex justify-content-center'><Button style={{backgroundImage: "linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%)"}} onClick={this.startTransaction}>Submit</Button></Col></Row></ListGroup.Item>
                 </ListGroup>
                 
                 </Card>
    
            </div>
        );
        
    }

}

export default Cart;