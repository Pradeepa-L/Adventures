import React,{Component} from 'react';
import {
  Card, Button, Form, FormGroup, Label, Input,Row,Col,Container
} from 'reactstrap';
import './history.css'


class History extends Component{
    
      

render(){ 
return (
  
    <div className="body">
        
    <div className="maincard">
    <h6 className="head">Purchase History</h6>
      <Card className="history">
          <p>Transaction ID 29923</p>
          <h6>Membership</h6>
          <Button color="danger" className="invoicebtn" size="lg" block>View Invoice</Button>
      </Card>

      <Card className="history1"> 
          <p>Transaction ID 29923</p>
          <h6>Membership</h6>
          <Button color="danger" className="" size="lg" block>View Invoice</Button>
      </Card>

      
    </div>
     

        
    </div>
    
   );
};
}


export default History;