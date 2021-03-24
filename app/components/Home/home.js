import React,{Component} from 'react';
import {
  Card, Button, Form, FormGroup, Label, Input,Row,Col,Link
} from 'reactstrap';
import './home.css'
import Arrow from './images/arrow.png'



class Home extends Component{

render(){ 
return (
  
    <div className="body">
    <Row className="row1">
      <Col sm-2>
      <div className="cardText ">
        <a href="/on_my_way">
        <p>On My Way</p>
        <img src={Arrow} className="arrowImg"></img>
        </a>
      </div></Col>
      <Col sm-2>  
      <div className="cardText">
      <a href="/reservation"> <p>Make a Reservation</p>
        <img src={Arrow} className="arrowImg"></img>
      </a>
      </div></Col>
     
    </Row>


      <Row className="row2">
      <Col sm-2><div className="cardText ">
      <a href="#">
        <p>Family Saving Plan Recharge</p>
        <img src={Arrow} className="arrowImg"></img>
      </a>
      </div></Col>
      <Col sm-2>
      <div className="text2">
      <a href="#">
        <p>Explore Camps</p>
        <img src={Arrow} className="arrowImg"></img>
        </a>
      </div></Col>

      </Row>


      <Row className="row3">
          
      <Col sm-2><div className="cardText">
      <a href="#">
        <p>Explore Programs</p>
        <img src={Arrow} className="arrowImg"></img>
     </a>
      </div></Col>
      <Col sm-2><div className="cardText text2">
      <a href="/contact">
        <p>Contact Us</p>
        <img src={Arrow} className="arrowImg"></img>
     </a>
      </div></Col>
      </Row>
      <Row className="row4">
      <Col sm-2><div className="cardText">
      <a href="/history">
        <p>Purchase History</p>
        <img src={Arrow} className="arrowImg"></img>
      </a>
      </div></Col>
      </Row>
    </div>
   );
};
}


export default Home;