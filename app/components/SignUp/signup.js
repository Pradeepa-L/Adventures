import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText 
} from 'reactstrap';
import '../SignUp/signup.css'
import { Component } from 'react';
import { register } from '../../../ApiService';
import logo from './images/logo_ellipse.png';

class Example extends Component{


  constructor(props){
    super(props)
    this.state={
      name:'',
      email:'' ,
      password:'',
      mobile:'',
      location:'',
      
    }
    this.onChange=this.onChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
   

    e.preventDefault()
    let email=this.state.email
    let password=this.state.password
    let name=this.state.name
    let mobile=this.state.mobile  
    let location=this.state.location   

         register( email,password,name,mobile,location ).then(res => {
          // this.props.history.push(`/login`)
          window.location= '/login'
        }).catch(err=>{
          // alert("please Enter All the fields")
          window.location= '/login'

        })
      }


render(){
return (
    <div className="bodySignup">
      <Card className="SignupmainCard" style={{width:"500px"}}>
     
<p className="heading">Signup Your Account</p >

<Form  noValidate onSubmit={this.onSubmit} className="signupform">
<ul className="error">
 
 </ul>
      <FormGroup>
       
       <Input type="input" name="name" id="name" value={this.state.name} onChange={this.onChange} placeholder="Name" />
      </FormGroup>
      <FormGroup>
       
        <Input type="email" name="email" id="email" value={this.state.email} onChange={this.onChange} placeholder="Email" />
      </FormGroup>
      <FormGroup>
       
        <Input type="password" name="password" id="password" value={this.state.password} onChange={this.onChange} placeholder="Password"/>
      </FormGroup>
      <FormGroup>
       
       <Input type="number" name="mobile" id="mobile" value={this.state.mobile} onChange={this.onChange} placeholder="Mobile No"/>
     </FormGroup>
     <FormGroup>
       
       <Input type="input" name="location" id="location" value={this.state.location} onChange={this.onChange} placeholder="Location"/>
     </FormGroup>

      
<Button color="danger" className="" size="lg" block>SIGN UP</Button>
<br></br>
<p className="forgot"><a href="/login">SignIn  with Your Account</a></p>
      </Form>


      </Card>
    </div>
  );
};
}
export default Example;