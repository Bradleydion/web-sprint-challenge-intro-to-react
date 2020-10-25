// Write your Character component here
import React from "react";
import {
    Container, Card, CardImg, CardBody,
     CardTitle, CardSubtitle
   } from 'reactstrap';

const Character = (props) => {
    console.log (props)
    return(
            <Container className="themed-container" fluid="sm">
            <Card>
              <CardImg top width="100%" src={props.image} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h3">{props.name}</CardTitle>
                <CardSubtitle tag="h4">{props.status},{props.species}</CardSubtitle>
              </CardBody>
            </Card>
            </Container>
        
       
    )
}
export default Character 
