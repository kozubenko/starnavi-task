// react
import React from 'react'
import PropTypes from 'prop-types'

export default function Address ({ full_address }) {
  return <p>{full_address}</p>
}

Address.propTypes = {
  full_address: PropTypes.string.isRequired
}
