import React from "react";
import "../styles/Signup.scss";

function Signup() {
    return (
        <div className="signup">
            <p className="signup__tag">
                Sign up and get exclusive special deals
            </p>
            <div className="signup__form">
                <input type="text" />
                <button>Signup</button>
            </div>
        </div>
    );
}

export default Signup;
