import React from 'react';
import {useSelector} from "react-redux";

const Login = () => {
    const loginPopup = useSelector(s => s.popupReducer.loginPopup)
    return (
        <form className={`login ${loginPopup ? 'active' : ''}`}>
            <h3>Вход</h3>
        </form>
    );
};

export default Login;