import React,{Component} from 'react';
import {
  Card, Button, Form, FormGroup, Label, Input,Row,Col,Container
} from 'reactstrap';
import './communication.css'


class Communication extends Component{
    
      

render(){ 
return (
  
    <div className="body">
        
    <Row className="maincard">
   
      <Card className="cardText">
          
          <h6>Adventures Kids Playcare</h6>
          <p>2days</p>
          <div className="about">
              <p>There is still to receive 20% off Summer Camp!
                  Make your summer camp purchased by end of day.Use Code -SUMMER20
              </p>
          </div>
      </Card>
</Row>
 <Row className="row1">
      <Card className="cardText">
          
          <h6>Adventures Kids Playcare</h6>
          <p>2days</p>
          <div className="about">
              <p>There is still to receive 20% off Summer Camp!
                  Make your summer camp purchased by end of day.Use Code -SUMMER20
              </p>
          </div>
      </Card>
      </Row>
{/* 
<Row className="maincard2">
      <Card className="cardText"> 
          
          <h6>Adventures Kids Playcare</h6>
          <p>2days</p>
          <div className="about">
              <p>There is still to receive 20% off Summer Camp!
                  Make your summer camp purchased by end of day.Use Code -SUMMER20
              </p>
          </div>
      </Card>
      </Row>
     

         */}
    </div>
    
   );
};
}


export default Communication;