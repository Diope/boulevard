import React from "react";

import "./Button.scss";

const Button = ({ children, isGoogle, inverted, ...otherProps }) => {
	return (
		<button className={`${inverted ? 'inverted' : ''} ${isGoogle ? 'googleButton' : ''} Button`} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
