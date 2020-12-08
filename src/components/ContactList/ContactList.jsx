import React from "react"
import ContactItem from "../ContactItem"
import PropTypes, { arrayOf } from 'prop-types'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './ContactList.css'

const ContactList = ({ contacts, onRemoveContact }) => {
  
  return (
   
   

    <TransitionGroup component = "ul" className = 'ContactList'>
      {contacts.map((item) => (
        <CSSTransition key={item.id} timeout = {250} classNames = "ContactList-item-slide">
        <ContactItem
          contact={item}
          onRemoveContact={() => onRemoveContact(item.id)}
        /> 
        </CSSTransition>
      ))}
    </TransitionGroup>
    
  )

}

ContactList.propTypes = {
  contacts: arrayOf(PropTypes.object)

}

export default ContactList
