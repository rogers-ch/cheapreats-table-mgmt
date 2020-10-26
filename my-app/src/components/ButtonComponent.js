import React from "react";

//interface for the ButtonComponent, use this to create the button
interface IButtonComponent{
    userType: string,
}
//This returns the button with what you want the button to say, with all the styles added
export const ButtonComponent: React.FC = ({
    //default userType
    userType = "Hello",
    ...props
}: IButtonComponent) => {
    return (
        <div>
            <button className="btn btn-danger btn-lg border-light rounded" >{userType}</button>
        </div>
    );
};