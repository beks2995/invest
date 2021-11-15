import React from 'react';
import Login from "./login";
import Registration from "./registration";
import {useSelector, useDispatch} from "react-redux";
import {closeAuthPopup} from "../../../redux/reducers/popupReducer";
import './authForm.scss'

const AuthForm = () => {
    const dispatch = useDispatch();
    const formOverlay = useSelector(s => s.popupReducer.authFormOverlay);
    const closePopupHandler = () => {
        dispatch(closeAuthPopup())
    };
    return (
        <div className={`auth-overlay ${formOverlay ? 'active' : ''}`}>
            <div className='auth-popup'>
                <Login/>
                <Registration/>
                <div className="close-popup" onClick={closePopupHandler}> </div>
            </div>

        </div>
    );
};

export default AuthForm;