import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import LogoBullet from '../LogoBullet'
import {Subtitle, Paragraph, SectionWrapper, LogoBulletList} from '../../styles/styled-components'
import reactLogo from '../../images/react-32x32.png'
import javascriptLogo from '../../images/javascript-32x32.png'
import htmlLogo from '../../images/html5-32x32.png'
import cssLogo from '../../images/css3-32x32.png'
import gitLogo from '../../images/git-logo.png'
import gatsbyLogo from '../../images/gatsby-monogram.png'
import graphqlLogo from '../../images/graphql-logo.png'
import styledComponentsLogo from '../../images/styled-components.png'

function AboutSection() {
  return (
    <SectionWrapper id="about">
      <Container>
        <StyledHeader>
          <Subtitle>About Me</Subtitle>
        </StyledHeader>
        <Row>
          <Col md="6">
            <Paragraph>
              I am a life-long learner and arts-oriented individual who fell in love with programming as a way to create
              and make ideas real. I am passionate about coding, and I am always looking for opportunities to improve my
              skills and take part in exciting projects. As a junior front-end developer, I enjoy working in a
              collaborative environment, and I'm hoping to be part of a team making a difference in the web development
              world.
            </Paragraph>
          </Col>
          <Col md="6">
            <Row>
              <Col>
                <LogoBulletList>
                  <LogoBullet logo={reactLogo} alt="React Logo" isReact>
                    React
                  </LogoBullet>
                  <LogoBullet logo={javascriptLogo} alt="Javascript Logo">
                    JavaScript
                  </LogoBullet>
                  <LogoBullet logo={htmlLogo} alt="HTML Logo">
                    HTML5
                  </LogoBullet>
                  <LogoBullet logo={cssLogo} alt="CSS Logo">
                    CSS3
                  </LogoBullet>
                </LogoBulletList>
              </Col>
              <Col>
                <LogoBulletList>
                  <LogoBullet logo={gatsbyLogo} alt="Gatsby Logo">
                    Gatsby
                  </LogoBullet>
                  <LogoBullet logo={graphqlLogo} alt="CSS Logo">
                    GraphQL
                  </LogoBullet>
                  <LogoBullet logo={styledComponentsLogo} alt="Styled Components Logo">
                    Styled-Components
                  </LogoBullet>
                  <LogoBullet logo={gitLogo} alt="Git Logo">
                    Git
                  </LogoBullet>
                </LogoBulletList>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  )
}

export default AboutSection
