// react
import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

// styles
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default class Slider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      total: Children.count(props.children),
      current: 0
    }
  }

  nextImage = () => {
    this.setState((state) => {
      const { total, current } = state

      if (current === total - 1) return { current: 0 }
      return { current: current + 1 }
    })
  }

  prevImage = () => {
    this.setState((state) => {
      const { total, current } = state

      if (current === 0) return { current: total - 1 }
      return {current: current - 1 }
    })
  }

  render () {
    const { children } = this.props
    const { total } = this.state

    return (
      <div className={cx('slider')}>
        {total > 1 &&
         (<div className={cx('buttonsWrapper')}>
            <button className={cx('prevButton')} onClick={this.prevImage}>
              <i className={cx('fas fa-chevron-left')} /></button>
            <button className={cx('nextButton')} onClick={this.nextImage}>
              <i className={cx('fas fa-chevron-right')} />
            </button>
          </div>)
        }
        {Children.toArray(children)[this.state.current]}
      </div>
    )
  }
}

Slider.propTypes = {
  children: PropTypes.array
}
