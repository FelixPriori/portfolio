import React from 'react'
import styled from 'styled-components'
import GitHub from '../images/logo-github.svg'
import Instagram from '../images/logo-instagram.svg'
import LinkedIn from '../images/logo-linkedin.svg'
import Twitter from '../images/logo-twitter.svg'

function SocialIcon({icon}) {
  return <Icon src={icon} />
}

function SocialListItem({icon, link, name}) {
  return (
    <ListItem>
      <StyledLink href={link} target="_blank" rel="noreferrer">
        <SocialIcon icon={icon} />
        {name}
      </StyledLink>
    </ListItem>
  )
}

function SocialList() {
  return (
    <List>
      <SocialListItem icon={LinkedIn} link="https://www.linkedin.com/in/felix-rioux-sabourin/" name="LinkedIn" />
      <SocialListItem icon={GitHub} link="https://github.com/FelixPriori/" name="GitHub" />
      <SocialListItem icon={Twitter} link="https://twitter.com/FelixPriori" name="Twitter" />
      <SocialListItem icon={Instagram} link="https://www.instagram.com/felixpriori/" name="Instagram" />
    </List>
  )
}

export default SocialList

const List = styled.ul`
  list-style: none;
  margin-left: 0;
`

const ListItem = styled.li`
  margin: 1em 0;
`

const StyledLink = styled.a`
  color: #5e81ac;
  font-size: 20px;
  transition: 200ms;

  &:hover {
    text-decoration: none;
    font-size: 24px;

    img {
      height: 36px;
      width: 36px;
    }
  }
`

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 1em;
`
