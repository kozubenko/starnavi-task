// react
import React from 'react'
import PropTypes from 'prop-types'

// styles
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export default function Preloader ({ isActive }) {
  return (<div className={cx('preloader', { 'is-active': isActive })} />)
}

Preloader.propTypes = {
  isActive: PropTypes.bool
}
