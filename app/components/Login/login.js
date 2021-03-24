import React,{Component} from 'react';
import {
  Card, Button, Form, FormGroup, Label, Input 
} from 'reactstrap';
import './login.css'
import { login } from '../../../ApiService';
import logo from './images/logo_ellipse.png';


class Login extends Component{


  constructor(props){
    super(props)
    this.state={

      email:'' ,
      password:'',
    
    }

    this.onChange=this.onChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }


  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
   

    e.preventDefault()
    const email=this.state.email
    const password=this.state.password
         
    login(email,password).then(res=>{
      window.location= '/home'
    })
  }



render(){
return (
  
    <div className="body">
      <Card className="mainCard">
        <img src={logo} className="img"/>
       <p className="heading">Login to Your Account</p >
        
         <Form  noValidate onSubmit={this.onSubmit} className="loginform">
          <FormGroup>
           <Input type="email" name="email" id="email" value={this.state.email} onChange={this.onChange} placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="password" value={this.state.password} onChange={this.onChange} placeholder="Password"/>
          </FormGroup>
        <Button color="danger" className="" size="lg"  block>SIGN IN</Button>
        <p className="forgot">Forgot password?</p>
        <p className="register">Not Registered? <span className="create" ><a href="/signup">Create an account</a></span></p>
      </Form>


      </Card>
    </div>
  );
};
}


export default Login;