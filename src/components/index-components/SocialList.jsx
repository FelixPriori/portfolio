import React from 'react'
import { ReactComponent as GitHub } from '../../images/logo-github.svg'
import { ReactComponent as Instagram } from '../../images/logo-instagram.svg'
import { ReactComponent as LinkedIn } from '../../images/logo-linkedin.svg'
import { List, ListItem, StyledIconLink } from '../../styles/styled-components'

function SocialListItem({ link, label, children }) {
  return (
    <ListItem>
      <StyledIconLink href={link} target="_blank" rel="noreferrer" aria-label={label}>
        {children}
      </StyledIconLink>
    </ListItem>
  )
}

function SocialList() {
  return (
    <List>
      <SocialListItem link="https://www.linkedin.com/in/felix-rioux-sabourin/" label="LinkedIn">
        <LinkedIn />
      </SocialListItem>
      <SocialListItem link="https://github.com/FelixPriori/" label="Github">
        <GitHub />
      </SocialListItem>
      <SocialListItem link="https://www.instagram.com/felixpriori/" label="Instagram">
        <Instagram />
      </SocialListItem>
    </List>
  )
}

export default SocialList
