// Write your Character component here
import React from "react";
import {
    Container, Card, CardImg, CardBody,
     CardTitle, CardSubtitle
   } from 'reactstrap';

const Character = (props) => {
    console.log(props)
    return(
            <Container className="themed-container" fluid="sm">
            <Card>
              <CardImg top width="50%" src={props.dummyData.image} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h3">{props.dummyData.name}</CardTitle>
                <CardSubtitle tag="p">{props.dummyData.status}, {props.dummyData.species}</CardSubtitle>
              </CardBody>
            </Card>
            </Container>
        
       
    )
}
export default Character 
