import React from 'react'
import {Row, Col} from 'reactstrap'
import {ReactComponent as GitHub} from '../images/logo-github.svg'
import {ReactComponent as Instagram} from '../images/logo-instagram.svg'
import {ReactComponent as LinkedIn} from '../images/logo-linkedin.svg'
import {ReactComponent as Twitter} from '../images/logo-twitter.svg'
import {List, ListItem, StyledIconLink} from '../styles/styled-components'

function SocialListItem({link, name, children}) {
  return (
    <ListItem>
      <StyledIconLink href={link} target="_blank" rel="noreferrer">
        {children}
        {name}
      </StyledIconLink>
    </ListItem>
  )
}

function SocialList() {
  return (
    <Row>
      <Col>
        <List>
          <SocialListItem link="https://www.linkedin.com/in/felix-rioux-sabourin/" name="LinkedIn">
            <LinkedIn />
          </SocialListItem>
          <SocialListItem link="https://github.com/FelixPriori/" name="GitHub">
            <GitHub />
          </SocialListItem>
        </List>
      </Col>
      <Col>
        <List>
          <SocialListItem link="https://twitter.com/FelixPriori" name="Twitter">
            <Twitter />
          </SocialListItem>
          <SocialListItem link="https://www.instagram.com/felixpriori/" name="Instagram">
            <Instagram />
          </SocialListItem>
        </List>
      </Col>
    </Row>
  )
}

export default SocialList
