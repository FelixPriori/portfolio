import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import {Subtitle, Paragraph, ImageWithShadow} from '../../styles/styled-components'
import Nominations from '../../images/shoppies-nominations.png'

function SummarySection() {
  return (
    <Container id="intro">
      <StyledHeader>
        <Subtitle>Summary</Subtitle>
      </StyledHeader>
      <Row>
        <Col lg={6}>
          <Paragraph>
            This challenge was given by Shopify as part of their front-end developer internship application process. We
            had to build the project from scratch and reach certain goals to pass this challenge, as well as some extra
            challenges if we wanted to go above and beyond.
          </Paragraph>
          <Paragraph>
            The idea is to create an app which lets the user search a database for their favourite movies, and nominate
            them for a Shoppy award. Users can only add up to 5 nominations, and movies can be removed from the
            nominations list if the user chages their mind.
          </Paragraph>
          <Paragraph>
            If the movie is already nominated, its nomination button should be disabled, the search results should
            update when the search terms change, and the search results had to show the title and year of release of the
            films.
          </Paragraph>
        </Col>
        <Col>
          <ImageWithShadow src={Nominations} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  )
}

export default SummarySection
