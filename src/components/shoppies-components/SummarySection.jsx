import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import {Subtitle, Paragraph, SectionWrapper} from '../../styles/styled-components'
import ImageModal from '../ImageModal'

function SummarySection() {
  return (
    <SectionWrapper>
      <Container id="summary">
        <StyledHeader>
          <Subtitle>Summary</Subtitle>
        </StyledHeader>
        <Row>
          <Col lg={6}>
            <Paragraph>
              This challenge was given by Shopify as part of their front-end developer internship application process.
              We had to build the project from scratch and reach certain goals to pass this challenge, as well as some
              extra challenges if we wanted to go above and beyond.
            </Paragraph>
            <Paragraph>
              The idea is to create an app which lets the user search a database for their favourite movies, and
              nominate them for a Shoppy award. Users can only add up to 5 nominations, and movies can be removed from
              the nominations list if the user changes their mind.
            </Paragraph>
          </Col>
          <Col>
            <ImageModal imagePath="shoppies-nominations.png" alt="Shoppies Landing" />
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  )
}

export default SummarySection
