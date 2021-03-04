import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import {Subtitle, Paragraph, SectionWrapper} from '../../styles/styled-components'

function AboutSection() {
  return (
    <SectionWrapper id="about">
      <Container>
        <StyledHeader>
          <Subtitle>About Me</Subtitle>
        </StyledHeader>
        <Row>
          <Col md="6">
            <h3>Summary</h3>
            <Paragraph>
              I am a life-long learner and arts-oriented individual who fell in love with programming as a way to create
              and make ideas real. I am passionate about coding, and I am always looking for opportunities to improve my
              skills and take part in exciting projects. As a junior front-end developer, I enjoy working in a
              collaborative environment, and I'm hoping to be part of a team making a difference in the web development
              world.
            </Paragraph>
          </Col>
          <Col md="6">
            <h3>Stack</h3>
            <Row>
              <Col>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML & CSS</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Gatsby</li>
                  <li>Styled-Components</li>
                  <li>Git</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  )
}

export default AboutSection
