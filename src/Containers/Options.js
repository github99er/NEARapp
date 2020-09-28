import React, { Component } from 'react';
import {Container,Row} from 'react-bootstrap';
import '../css/blockshopUtils.css'
import Item from './Options/Item'
import blueRing from '../assets/blueRing.png'
import butterFly from '../assets/butterfly.png'
import fireWing from '../assets/fireWing.png'

class Options extends Component {



    listItems=[
        {name:'Butterfly',price:30,description:'This Butterfly has Magical Propeties... What those are? Who knows.. Buy it.',picture:butterFly},
        {name:'Blue Ring',price:50,description:'May this random ring grant you protection somehow...',picture:blueRing},
        {name:'Fire Wing',price:80,description:'I Think this used to Belong to Icarus... oops..',picture:fireWing}
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