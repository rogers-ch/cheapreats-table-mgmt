import React from "react";
import styled from 'styled-components';

//interface for the ButtonComponent, use this to create the button
interface IButtonComponent{
    userType: string,
}
//This returns the button with what you want the button to say, with all the styles added
export const ButtonComponent: React.FC <IButtonComponent> = ({
    //default userType
    userType = "Hello",
    ...props
}: IButtonComponent) => {
    return (
        <div>
            <ButtonStyling>{userType}</ButtonStyling>
        </div>
    );
};

const ButtonStyling = styled.div`
    border-color: #f8f9fa;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    line-height: 1.5;
    color: #fff;
    background-color: #dc3545;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border: 1px solid transparent;
    display: inline-block;
    user-select: none;
    text-align: center;
    vertical-align: middle;
`;
