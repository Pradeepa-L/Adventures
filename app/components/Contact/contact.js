import React,{Component} from 'react';
import {
  Card, Button, Form, FormGroup, Label, Input,Row,Col,Container
} from 'reactstrap';
import './contact.css'
import GoogleMapReact from 'google-map-react';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

class Contact extends Component{
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
      

render(){ 
return (
  
    <div className="body">




        <Container className="maincard">
        <p>690 Parker Square</p>
        <p>Flower Mound</p>
        <p>Tx 75028</p>
        </Container>
     

        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
        </GoogleMapReact>
      </div>
    </div>
    
   );
};
}


export default Contact;