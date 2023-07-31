import React from 'react';
import PropTypes from 'prop-types';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    return <button>{children}</button>;
}

Button.propTypes = {
    primary: PropTypes.bool.isRequired,
    secondary: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool
}
export default Button;
