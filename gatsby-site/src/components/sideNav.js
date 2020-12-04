import React from 'react';
import '../css/navBar.css';
import SideNavButtonModal from "./SideNavButtonModel";
import styled from 'styled-components';

function SideNav() {

    return (
        <div>
            <div id="viewport">
                <div className="navHeading">
                    <NavBarDefault>
                        <ContainerFluid>
                            <ULNavBarRight>
                                <li>
                                    <a href="#"><ZmdiNotificationsTextDanger></ZmdiNotificationsTextDanger>
                                    </a>
                                </li>
                            </ULNavBarRight>
                        </ContainerFluid>
                    </NavBarDefault>
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

const ZmdiNotificationsTextDanger = styled.i`
    color: #dc3545;
`;

const ULNavBarRight = styled.div`
display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-wrap: wrap;
    margin-top: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    font-family: 'Lato', sans-serif;
`;

const ContainerFluid = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

const NavBarDefault = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: white;
    font-family: 'Lato', sans-serif;
}
`;

export default SideNav;