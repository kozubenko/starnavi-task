// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// components
import Address from './components/Address/Address'
import Price from './components/Price/Price'
import Area from './components/Area/Area'
import MediaViewer from './components/MediaViewer/MediaViewer'

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
  renderComponent = (key, componentName, field, children) => {
    const { properties } = this.props

    const component = componentList[componentName]
    if (component) {
      return (React.createElement(
        component,
        { [field]: properties[field], renderComponent: this.renderComponent, key },
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
            return this.renderComponent(idx, component, field, children)
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
