import React from 'react'
import {Link} from 'gatsby'
import {Row, Col} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import {SectionWrapper, Subtitle, Paragraph, SubSection, ButtonContainer} from '../../styles/styled-components'

function ConclusionSection() {
  return (
    <SectionWrapper>
      <StyledHeader>
        <Subtitle>Conclusion</Subtitle>
      </StyledHeader>
      <SubSection>
        <h3>Lessons</h3>
        <Row>
          <Col lg={6}>
            <Paragraph>
              I really wanted the code to look especially neat for the reviewers for this project (not that it isn't
              usually), so I went back a lot on my code to write and rewrite until I was satisfied with how it looked. I
              tried put a lot of thought and intention into naming each components (react or styled), variables, files,
              and functions so as to improve readability to a maximum. This ended up making my life a lot easier when I
              went to add extra features and refactor the code afterwards. This is something I will keep in my
              day-to-day work for sure.
            </Paragraph>
          </Col>
          <Col>
            <Paragraph>
              The API was feeding data that was named in an unconventional way. For instance, each key started with a
              capital letter (ex: Tile, Year, etc.). This made the code look unusual especially when at first I was
              passing them as props. I decided that I was going to write a function that would rename the variables, and
              this ended up, in turn, separating the layer of the API from my app and made it easier to test it
              afterwards.
            </Paragraph>
          </Col>
        </Row>
      </SubSection>
      <ButtonContainer>
        <Link to="/" className="btn btn-yellow">
          Return
        </Link>
      </ButtonContainer>
    </SectionWrapper>
  )
}

export default ConclusionSection
