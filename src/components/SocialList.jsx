import React from 'react'
import {ReactComponent as GitHub} from '../images/logo-github.svg'
import {ReactComponent as Instagram} from '../images/logo-instagram.svg'
import {ReactComponent as LinkedIn} from '../images/logo-linkedin.svg'
import {ReactComponent as Twitter} from '../images/logo-twitter.svg'
import {List, ListItem, StyledIconLink} from '../styles/styled-components'

function SocialListItem({link, children}) {
  return (
    <ListItem>
      <StyledIconLink href={link} target="_blank" rel="noreferrer">
        {children}
      </StyledIconLink>
    </ListItem>
  )
}

function SocialList() {
  return (
    <List>
      <SocialListItem link="https://www.linkedin.com/in/felix-rioux-sabourin/">
        <LinkedIn />
      </SocialListItem>
      <SocialListItem link="https://github.com/FelixPriori/">
        <GitHub />
      </SocialListItem>
      <SocialListItem link="https://twitter.com/FelixPriori">
        <Twitter />
      </SocialListItem>
      <SocialListItem link="https://www.instagram.com/felixpriori/">
        <Instagram />
      </SocialListItem>
    </List>
  )
}

export default SocialList
