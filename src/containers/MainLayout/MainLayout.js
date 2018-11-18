// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// components
import HouseMap from '../../components/HouseMap/HouseMap'
import Preloader from '../../components/Preloader/Preloader';

// redux
import { connect } from 'react-redux'
import { fetchInitialData } from '../../reducers'

// styles
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class MainLayout extends Component {
  componentDidMount () {
    const { fetchInitialData } = this.props
    fetchInitialData()
  }

  render () {
    const { properties, templates, isLoading } = this.props

    return (
      <div className={cx('mainLayout')}>
        <Preloader isActive={isLoading}/>
        <div className={cx('contentWrapper')}>
          {
            templates.map((template) => {
              return properties.map((prop) => <HouseMap key={prop.id} properties={prop} templateProperties={template} />)
            })
          }
        </div>
      </div>

    )
  }
}

MainLayout.propTypes = {
  properties: PropTypes.array.isRequired,
  templates: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default connect(
  (state) => ({
    properties: state.properties,
    templates: state.templates,
    isLoading: state.isLoading
  }),
  { fetchInitialData }
)(MainLayout)
