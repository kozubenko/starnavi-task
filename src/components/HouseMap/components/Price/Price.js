import React from 'react'
import PropTypes from 'prop-types'

export default function Price ({ price }) {
  return <p>{'$ ' + price}</p>
}

Price.propTypes = {
  price: PropTypes.number.isRequired
}
