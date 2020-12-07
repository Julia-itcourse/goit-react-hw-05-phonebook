import React from "react"
import styles from "./ContactItem.module.css"
import PropTypes from 'prop-types'

const ContactItem = ({ contact , onRemoveContact}) => {
  return (
    <li className={styles.item}>
      <span className={styles.text}>
        {contact.name}: {contact.number}
      </span>
      <button className={styles.button} type="button" onClick={onRemoveContact}>
        Remove
      </button>
    </li>
  )
}



ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired
}

export default ContactItem
