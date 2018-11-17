import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchInitialData } from '../../reducers'

class MainLayout extends Component {
  componentDidMount () {
    const { fetchInitialData } = this.props
    fetchInitialData()
  }

  render () {
    return (
      <div>Main Layout</div>
    )
  }
}

export default connect(
  (state) => ({
    properties: state.properties,
    templates: state.templates,
    loaded: state.templates
  }),
  { fetchInitialData }
)(MainLayout)
