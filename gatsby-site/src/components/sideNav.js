import React from 'react';
import '../css/navBar.css';
import SideNavButtonModal from "./SideNavButtonModel";

function SideNav() {

    return (
        <div>
            <div id="viewport">
                <div className="navHeading">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#"><i className="zmdi zmdi-notifications text-danger"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="sidebar-container">
                        <div className="pl-2">
                            <SideNavButtonModal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;