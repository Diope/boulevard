import React from "react";

import "./Button.scss";

const Button = ({ children, isGoogle, ...otherProps }) => {
	return (
		<button className={`${isGoogle ? 'googleButton' : ''} Button`} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
