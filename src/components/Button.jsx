import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, onClick, operator, prominent }) => (
    <button
        className={`button ${
            operator ? 'is-danger' : prominent ? 'is-dark' : ''
        } is-large is-fullwidth`}
        onClick={() => onClick(children)}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    operator: PropTypes.bool,
    prominent: PropTypes.bool,
};

export default Button;
