import React from "react";
import { menu_categories } from "../constants/menu";
import {isEmpty} from 'lodash'
import Link from "react-router/lib/Link";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const DesktopNavBar = ({ urlPath, toggleSubMenu, showSubMenu, selected, showSubmenuOnHover, hideSubmenuOnHover, customerInfo, isShowNetwokStrip, closeNetworkStrip, customerDropDownClass}) => (
  <div>
    <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link className="navbar-brand" to="/"><span className="study_nav">HOME </span><span className="hub_nav">PROJECT</span></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <Navbar.Brand>
            <Link className="navbar-brand" to={`/add-edit-user`}><span className="study_nav">ADD USER </span></Link>
          </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {/*
     isShowNetwokStrip &&
     <div className="network-strip"> No Internet Connection <span onClick={closeNetworkStrip}>X</span>
     </div>*/
    }
  </div>
)

export default DesktopNavBar