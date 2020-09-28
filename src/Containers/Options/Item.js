import React, { Component } from 'react';
import {Card, Button,} from 'react-bootstrap';


const Item=(props)=> {

    const addItem=()=>{
        props.addItem(props.name,props.price)
    }

        return (
            <div>
                        <Card>
                        <Card.Img variant="top" src={props.picture} />
                        <Card.Body>
                          <Card.Title>{props.name}</Card.Title>
                          <Card.Text>
                                  {props.description}
                          </Card.Text>
                          <Card.Title>{props.price}</Card.Title>
                          <Button onClick={addItem} variant="primary">Add to Cart</Button>
                        </Card.Body>
                      </Card>
                 
            </div>
        );
    
}

export default Item;