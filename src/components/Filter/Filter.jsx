import React from "react"
import styles from "./Filter.module.css"
import PropTypes from "prop-types"

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className = {styles.filter__wrap}>
    <h2>Filter the contact list</h2>
    <label>
      <input
        className={styles.form__input}
        type="text"
        name="filter"
        value={value}
        onChange={(event) => onChangeFilter(event.target.value)}
      />
    </label>
    </div>
  )
}

Filter.defaultProps = {
  value: "",
}

Filter.propTypes = {
  value: PropTypes.string.isRequired
}

export default Filter
