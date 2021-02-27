import React from 'react'
import {Row, Col} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import {
  Subtitle,
  ReactSpinningLogo,
  LogoLinkedContainer,
  Logo,
  Paragraph,
  LogoBoxCol,
  SectionWrapper,
} from '../../styles/styled-components'
import ReactLogo from '../../images/react-logo.svg'
import Bootstrap from '../../images/bootstrap-solid.svg'
import StyledComponents from '../../images/styled-components.png'
import Sass from '../../images/sass.png'
import TestingLibrary from '../../images/testing-library.png'

function LogoBox() {
  return (
    <LogoBoxCol lg={6}>
      <LogoLinkedContainer href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noreferrer">
        <ReactSpinningLogo src={ReactLogo} alt="React Logo" />
      </LogoLinkedContainer>

      <LogoLinkedContainer href="https://reactstrap.github.io/" target="_blank" rel="noreferrer">
        <Logo src={Bootstrap} alt="Bootstrap Logo" width={36} height={36} />
      </LogoLinkedContainer>

      <LogoLinkedContainer href="https://styled-components.com/" target="_blank" rel="noreferrer">
        <Logo src={StyledComponents} alt="Styled-Components Logo" width={60} height={40} />
      </LogoLinkedContainer>

      <LogoLinkedContainer href="https://sass-lang.com/" target="_blank" rel="noreferrer">
        <Logo src={Sass} alt="Sass Logo" width={60} height={40} />
      </LogoLinkedContainer>

      <LogoLinkedContainer
        href="https://testing-library.com/docs/react-testing-library/intro/"
        target="_blank"
        rel="noreferrer"
      >
        <Logo src={TestingLibrary} width={36} height={36} alt="Testing Library Logo" />
      </LogoLinkedContainer>
    </LogoBoxCol>
  )
}

function StackSection() {
  return (
    <SectionWrapper id="stack">
      <StyledHeader>
        <Subtitle>Stack</Subtitle>
      </StyledHeader>
      <Row>
        <LogoBox />

        <Col>
          <Paragraph>
            I used React hooks primarily because it is by far my most comfrotable stack, and thus it would play to my
            strengths in the context of a challenge project. Additionally it makes it extremely fast to setup and
            prototype an app.
          </Paragraph>
          <Paragraph>
            I used Bootstrap to make the html structure and the responsive without having to resort to media queries and
            keep the code cleaner.
          </Paragraph>
          <Paragraph>
            Almost all of the styling was done with Styled-Components as it helps with semantically labeling the
            structure without making actual React components. This made it so I could avoid using classes and de-cluster
            the code and make it more explicit. For some of the more global styling and for overriding certain bootstrap
            properties, I used SASS very sparingly.
          </Paragraph>
          <Paragraph>
            I used React Testing Library to test the app as it is pre-installed with React already and comes with almost
            everything I needed to test my app.
          </Paragraph>
          <Paragraph></Paragraph>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default StackSection
