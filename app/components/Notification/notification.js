import { divide } from 'lodash';
import React,{Component} from 'react';
import {
  Card, Button, Form, FormGroup, Label, Input,Row,Col,Container
} from 'reactstrap';
import './notification.css'


class Notification extends Component{
    
      

render(){ 
return (
  
    <div className="body">
        <Row className="mainCard">
        <Card className="cardText">
       <div>
           <p>Your Reservation under processing. We will email you once it confirmed.
           </p>
       </div>
       </Card>
        </Row>
    
        <Row className="mainCard1">
        <Card className="cardText">
       <div>
           <p>Hurray. Your Payment Successful and added to your Wallet
           </p>
       </div>
       </Card>
        </Row>


        <Row className="mainCard2">
        <Card className="cardText">
       <div>
           <p>You got a 25% OFF coupon on Flex Passes for Summer Special Passes
           </p>
       </div>
   </Card>
   </Row>

   <Row className="mainCard2">
        <Card className="cardText">
       <div>
           <p>You got a 25% OFF coupon on Flex Passes for Summer Special Passes
           </p>
       </div>
   </Card>
   </Row>

   <Row className="mainCard2">
        <Card className="cardText">
       <div>
           <p>You got a 25% OFF coupon on Flex Passes for Summer Special Passes
           </p>
       </div>
   </Card>
   </Row>
        
        
    </div>
    
   );
};
}


export default Notification;

