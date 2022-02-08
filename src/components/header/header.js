import React, { useState } from 'react';
import './header.css';
import { useHistory } from "react-router-dom";


function Header() {
    
    const history = useHistory();
    // USING REACT HOOKS
    var [activeTab,setActiveTab]= useState('');


    function routing(destinationAddress) {
        setActiveTab(activeTab = destinationAddress)
        console.log("UPDATED-TAB",activeTab)
        history.push("/" + destinationAddress);
    }
    
    return(
        <header className="header">
            <div className="header-items">
                <div className={activeTab===""?'active-header-tab':'header-tab'} onClick={() => routing("")}><p className="header-text">Notes</p></div>
                <div className={activeTab==="jokes"?'active-header-tab':'header-tab'} onClick={() => routing("jokes")}><p className="header-text">Jokes</p></div>
                <div className={activeTab==="aboutme"?'active-header-tab':'header-tab'} onClick={() => routing("aboutme")}><p className="header-text">Say Hi</p></div>
            </div>
        </header>
    );
}

export default Header;
