import React from "react";

interface IButtonComponent{
    userType: string,
}

export const ButtonComponent: React.FC = ({
    userType = "Hello",

    ...props
}: IButtonComponent) => {
    return (
        <div>
            <button className="btn btn-danger btn-lg border-light rounded" >{userType}</button>
        </div>
    );
};