import React from 'react'
import PropTypes from 'prop-types'
import {Col} from 'reactstrap'
import {StaticImage} from 'gatsby-plugin-image'
import {ImageColumn, ProjectWrapper, StackRow, StyledProjectLink} from '../../styles/styled-components'

function Project({name, description, screenshot, slug, stack, alt}) {
  return (
    <ProjectWrapper>
      <Col md={{size: 6, order: alt ? 2 : 1}}>
        <h3>{name}</h3>
        <p>{description}</p>
        <StackRow>
          <Col>
            <ul>{stack && stack.map(({tech, id}, i) => i < 3 && <li key={id}>{tech}</li>)}</ul>
          </Col>
          <Col>
            <ul>{stack && stack.map(({tech, id}, i) => i >= 3 && <li key={id}>{tech}</li>)}</ul>
          </Col>
        </StackRow>
        <StyledProjectLink className="btn btn-red" to={slug}>
          View Project
        </StyledProjectLink>
      </Col>
      <ImageColumn lg={{size: 6, order: alt ? 1 : 2}}>
        <StaticImage
          style={{boxShadow: `1px 1px 10px black`, borderRadius: '5px'}}
          imgStyle={{borderRadius: '5px'}}
          src="../../images/shoppies.png"
          alt="Screenshot of shoppies' landing page"
          objectFit="contain"
        />
      </ImageColumn>
    </ProjectWrapper>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
  alt: PropTypes.bool,
}

Project.defaultProps = {
  alt: false,
}

export default Project
