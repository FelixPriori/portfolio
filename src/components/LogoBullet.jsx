import React from 'react'
import PropTypes from 'prop-types'
import {ReactSpinningLogo, Logo, LogoBulletItem} from '../styles/styled-components'

function LogoBullet({logo, alt, children, isReact}) {
  return (
    <LogoBulletItem>
      {isReact ? (
        <ReactSpinningLogo src={logo} alt={alt} width={20} height={20} />
      ) : (
        <Logo width={20} height={20} src={logo} alt={alt} />
      )}
      {children}
    </LogoBulletItem>
  )
}

LogoBullet.propTypes = {
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  isReact: PropTypes.bool,
}

LogoBullet.defaultProps = {
  isReact: false,
}

export default LogoBullet
