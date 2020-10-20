import React from "react";
import PropTypes from 'prop-types';

export const ButtonComponent = ({userType}) =>{
  return(
            <button>
                {userType}
            </button>
  );
};

ButtonComponent.propTypes = {
    userType: PropTypes.string
}

ButtonComponent.defaultProps ={
    userType: "Null"
}