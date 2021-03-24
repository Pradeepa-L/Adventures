import React,{Component} from 'react';
import {
  Card, Button, Form, FormGroup, Label, Input,Row,Col,Container
} from 'reactstrap';
import './calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar';

import moment from 'moment';


class Contact extends Component{
    

render(){ 
return (
  
    <div className="body">
        <Calendar

startAccessor="start"

endAccessor="end"

/>
    </div>
    
   );
};
}


export default Contact;