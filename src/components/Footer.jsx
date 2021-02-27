import React from 'react'
import {FooterWrapper, GithubLink} from '../styles/styled-components'
import {ReactComponent as Github} from '../images/logo-github.svg'

function Footer() {
  return (
    <FooterWrapper>
      <p>&#169; Felix Rioux Sabourin 2021</p>

      <GithubLink href="https://github.com/FelixPriori/portfolio" target="_blank" rel="noreferrer">
        Source Code
        <Github />
      </GithubLink>
    </FooterWrapper>
  )
}

export default Footer
