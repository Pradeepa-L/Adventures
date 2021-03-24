import React,{Component} from 'react';
import {
  Card, Button, Form, FormGroup, Label, Input,Row,Col,Container
} from 'reactstrap';
import './reservation.css'


class Reservation extends Component{
    
render(){ 
return (
  
  <div className="body">
  <Row className="mainCard">
  
  </Row>

  <Row className="mainCard1">
  <Card className="cardText">
 <div>
     <p>Your Reservation under processing. We will email you once it confirmed.
     </p>
 </div>
 </Card>
  </Row>


  <Row className="mainCard2">
  <Card className="cardText">
 <div>
     <p>Your Reservation under processing. We will email you once it confirmed.
     </p>
 </div>
</Card>
</Row>

<Row className="mainCard2">
  <Card className="cardText">
 <div>
     <p>Your Reservation under processing. We will email you once it confirmed.
     </p>
 </div>
</Card>
</Row>

<Row className="mainCard2">
  <Card className="cardText">
 <div>
     <p>Your Reservation under processing. We will email you once it confirmed.
     </p>
 </div>
</Card>
</Row>
  
  
</div>
    
   );
};
}


export default Reservation;


