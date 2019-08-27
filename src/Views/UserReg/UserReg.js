import React from "react";
import "./UserReg.scss";

import SignIn from "../../Components/SignIn/SignIn";
import SignUp from '../../Components/SignUp/SignUp'

const UserAccount = () => {
	return (
		<div className="UserRegistration">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default UserAccount;
