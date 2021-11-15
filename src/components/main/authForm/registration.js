import React from 'react';
import {useSelector} from "react-redux";

const Registration = () => {
    const regPopup = useSelector(s => s.popupReducer.regPopup)
    return (
        <form className={`reg ${regPopup ? 'active' : ''}`}>
            <h3>Регистрация</h3>
        </form>
    );
};

export default Registration;