import React, { Component } from 'react';
import {Container,Row} from 'react-bootstrap';
import '../css/blockshopUtils.css'
import Item from './Options/Item'


import defiKing from "../assets/defiKing.gif"
import rainbowUnicorn from '../assets/unicorn.gif'
import pixelCorn from '../assets/pixelCorn.gif'

class Options extends Component {



    listItems=[
        {name:'Rainbow Unicorn',price:30,description:'',picture:rainbowUnicorn},
        {name:'Defi Unicorn',price:50,description:'',picture:defiKing},
        {name:'Pixelated Unicorn',price:80,description:'',picture:pixelCorn}
]



    render() {       
        return (
            <div className="OptionsContainer">
              
                <Container >
                    {this.listItems.map(x=>( 
                        <Row key={x.name} className="rowSpacing d-flex justify-content-center"> 
                            <Item picture={x.picture} addItem={this.props.addItem} name={x.name} price={x.price} description={x.description} key={x.name}></Item></Row>
                    ))}
                </Container>
            </div>
        );
    }
}

export default Options;