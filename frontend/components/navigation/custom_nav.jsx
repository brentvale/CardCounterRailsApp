var React = require('react');
var Link = require('react-router').Link;

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

var CustomNav = React.createClass({
  render: function(){
    
    return(
      <Navbar fixedTop style={{position: "relative", display:"block"}}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{"Brand Goes Here"}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav> 
            <NavItem  href=""
                      rel="nofollow">LINK 1</NavItem>
            <NavItem  href=""
                      rel="nofollow">LINK 2</NavItem>
            <NavItem  href=""
                      rel="nofollow">LINK 3</NavItem>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
});

module.exports = {
  CustomNav: CustomNav
}