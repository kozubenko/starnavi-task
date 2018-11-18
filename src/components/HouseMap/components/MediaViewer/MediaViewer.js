// react
import React from 'react'
import PropTypes from 'prop-types'

// components
import Slider from '../Slider/Slider'

// styles
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function MediaViewer ({ images, renderComponent, children }) {
  return (
    <div className={cx('mediaViewer')}>
      {children &&
        <div className={cx('children')}>
          {children.map(({ component, field }, idx) => renderComponent(idx, component, field))}
        </div>
      }
      <Slider>
        {images.map((source, idx) => (<img key={idx} src={source} />))}
      </Slider>
    </div>
  )
}

MediaViewer.propTypes = {
  images: PropTypes.array.isRequired,
  renderComponent: PropTypes.func.isRequired,
  children: PropTypes.array
}
