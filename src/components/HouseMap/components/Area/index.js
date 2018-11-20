// react
import React from 'react'
import PropTypes from 'prop-types'

export default function Area ({ area }) {
  return <p>{`${area} sq. fr.`}</p>
}

Area.propTypes = {
  area: PropTypes.number.isRequired
}
