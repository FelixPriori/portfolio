import React from 'react'
import PropTypes from 'prop-types'
import {Col} from 'reactstrap'
import {ProjectImage, ImageColumn, ProjectWrapper, StackRow, StyledProjectLink} from '../../styles/styled-components'

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
        <StyledProjectLink className="btn btn-dark-outline" to={slug}>
          View Project
        </StyledProjectLink>
      </Col>
      <ImageColumn md={{size: 6, order: alt ? 1 : 2}}>
        <ProjectImage src={screenshot} alt={`${name} screenshot`} />
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
