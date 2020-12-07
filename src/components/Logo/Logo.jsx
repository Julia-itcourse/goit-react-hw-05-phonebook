import React from 'react'
import {CSSTransition} from 'react-transition-group'
import  './Logo.css'

const Logo = () => {
    return (
        <CSSTransition in={true} appear = {true} timeout = {500} classNames = "Logo-slideIn">
        <>
       <h1 className="Logo">Phonebook</h1> 
</>
</CSSTransition>)
}

export default Logo