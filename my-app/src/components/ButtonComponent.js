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
            <button>{userType}</button>
        </div>
    );
};