import React from 'react';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

const Header = (props) => {
  return (
    <MDBNav className="justify-content-center">
      <MDBNavItem>
        <MDBNavLink activeClassName='active' activeStyle={{ color: 'red' }} to="/reacteventsource">ReactEventSource</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink activeClassName='active' activeStyle={{ color: 'red' }} to="/npmpackage">Npmpackage</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink activeClassName='active' activeStyle={{ color: 'red' }} to="/microfrontend">Microfrontend</MDBNavLink>
      </MDBNavItem>
    </MDBNav>
  );
}

export default Header;
