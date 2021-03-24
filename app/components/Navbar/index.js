import React, { useState, useEffect } from 'react';
import './index.css';
import logo from './images/logo.png';

import profile from './images/user1.jpg'

import {Link} from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarText,
 Modal, ModalHeader, ModalBody, ModalFooter,
  Container, Row, Col ,
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText,CardLink
} from 'reactstrap';
import jwt_decode from 'jwt-decode'
const Example = (props) => {

const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
      

    <div>
      <Navbar expand="md" className="navbar">
        <NavbarBrand href="/home"><img src={logo} className="logo"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto navitems" navbar>
          {/* <NavItem>
            <UncontrolledDropdown nav inNavbar>
            <NavLink href="/home" className="link1 ">HOME </NavLink>
              
             </UncontrolledDropdown>
            </NavItem> */}
            {/* <NavItem>
            <UncontrolledDropdown nav inNavbar>
            <NavLink href="/calendar" className="link2 ">CALENDAR</NavLink>
              
             </UncontrolledDropdown>
            </NavItem>
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
             <NavLink href="/cart" className="link2 ">CART</NavLink>
              
              </UncontrolledDropdown>
            </NavItem> */}
            <NavItem>
            <div className="logos">
              <div className="button">
               <Link to='/login'>  <Button  variant="dark" >Login</Button></Link>
               <Link to='/signup'>  <Button  variant="dark" className="signup">SIGN UP</Button></Link>
              </div>
            </div>
            </NavItem>

            <NavItem>
            <img src={profile} className="profileImg"></img>
            </NavItem>
            </Nav>
          
        </Collapse>
      </Navbar>

      <ProSidebar >
  <Menu iconShape="square" className="sidenav">
      <MenuItem> Pradeepa L</MenuItem>
      <MenuItem> pradeepal026@gmail.com</MenuItem>
      <MenuItem> 9876543210</MenuItem>
      <br/>
      <hr/>
      
      <MenuItem>Home <Link to="/home" /></MenuItem>
      <MenuItem>On My Way <Link to="/on_my_way" /></MenuItem>
      <MenuItem>Notification <Link to="/notification" /></MenuItem>
      <MenuItem>Reservation <Link to="/reservation" /></MenuItem>
      <MenuItem>Communication <Link to="/communication" /></MenuItem>
      <MenuItem>Contact Us <Link to="/contact" /></MenuItem>
      <MenuItem> Purchase History <Link to="/history" /></MenuItem>
      <br/>
      <hr/>
      <MenuItem>Logout <Link to="/" /></MenuItem>
  </Menu>
</ProSidebar>
    </div>
  

  );
}

export default Example;