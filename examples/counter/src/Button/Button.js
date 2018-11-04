import React from "react"
import PropTypes from "prop-types"

export const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
)
Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
}
Button.defaultProps = {
  onClick: () => {},
}
