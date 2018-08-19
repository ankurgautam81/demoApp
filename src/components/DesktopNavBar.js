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
          <Link className="navbar-brand" to="/"><span className="study_nav">STUDY </span><span className="hub_nav">HUB</span></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          {
            menu_categories.map((item, index) => {
              const isSubMenuPresent = !isEmpty(item.menu_children)
              return isSubMenuPresent ? <NavDropdown key={index} eventKey={index} title={item.name} id={`nav-dropdown-${index}`}>
                {
                  item.menu_children.map((sub_menu, i) => {
                    return <Link role="menuitem" key={index+"-"+i} to={sub_menu.url_path}><MenuItem key={index+"-"+i} eventKey={index+`.`+i} >
                      {sub_menu.name}
                    </MenuItem></Link>

                  })
                }
              </NavDropdown>
                :<NavItem key={index} href="#">
                  {item.name}
                </NavItem>
            })
          }
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