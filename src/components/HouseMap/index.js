// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// components
import Address from './components/Address'
import Price from './components/Price'
import Area from './components/Area'
import MediaViewer from './components/MediaViewer'

// styles
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const componentList = {
  'AREA': Area,
  'ADDRESS': Address,
  'PRICE': Price,
  'IMAGE': MediaViewer
}

const cx = classNames.bind(styles)

export default class HouseMap extends Component {
  buildComponent = (key, componentName, field, children) => {
    const { properties } = this.props

    const component = componentList[componentName]

    if (component) {
      return (React.createElement(
        component,
        { [field]: properties[field], buildComponent: this.buildComponent, key },
        children)
      )
    }
  }

  render () {
    const { properties, templateProperties } = this.props

    return (
      <div className={cx('houseMap')}>
        {templateProperties.template.map(({ component, field, children }, idx) => {
          if (properties[field.toLowerCase()]) {
            return this.buildComponent(idx, component, field, children)
          }
        })}
      </div>
    )
  }
}

HouseMap.propTypes = {
  properties: PropTypes.object.isRequired,
  templateProperties: PropTypes.object.isRequired
}
