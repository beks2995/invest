import React from 'react';
import Home from "./home";
import Header from "./header";
import Benefits from "./benefits";
import Begin from "./begin";
import About from "./about";
import Calculator from "./calculator";
import Feedback from "./feedback";
import Tariffs from "./tariffs";
import Docs from "./docs";
import Faq from "./faq";
import Contacts from "./contacts";
import Footer from "./footer";
import AuthForm from "./authForm/authForm";

const Main = () => {
    return (
        <>
            <Header/>
            <Home/>
            <Benefits/>
            <Begin/>
            <About/>
            <Calculator/>
            <Feedback/>
            <Tariffs/>
            <Docs/>
            <Faq/>
            <Contacts/>
            <Footer/>
            <AuthForm/>
        </>
    );
};

export default Main;