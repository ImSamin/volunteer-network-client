import React, { useContext } from 'react';
import logo from '../../volunteer-network-main/logos/Group 1329.png'
import './Navbar.css'

import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavAdminBtnLink } from "./MenuItems";
import { useHistory } from 'react-router';
import { userContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory()
    const handleRegisterBtn = () => {
        history.push = ('/login');
    }
    return (
        <div className="">
            <Nav>
                <NavLink to="/">
                    <img style={{ width: '120px', height: '50px' }} src={logo} alt=""></img>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/donation" activeStyle>
                        Donation
                    </NavLink>
                    <NavLink to="/user" activeStyle>
                        Events
                    </NavLink>
                    <NavLink to="/blog" activeStyle>
                        Blog
                    </NavLink>
                    <NavBtn>
                        {
                            loggedInUser.displayName ? <NavLink className="display-name" to="/user"> 
                            {loggedInUser.displayName}
                            </NavLink> 
                            :
                            <div>
                                    <NavBtnLink className="register-btn btn" to="/login"><button OnClick={handleRegisterBtn} className="register-btn btn ">Register</button></NavBtnLink>
                                    <NavAdminBtnLink className="admin-btn" to="">Admin</NavAdminBtnLink>
                            </div> 
                        }
                    </NavBtn>
                </NavMenu>
                

            </Nav>
        </div>
    );
};

export default Navbar;