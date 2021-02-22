import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {Row, Col} from 'reactstrap'
import {ProjectImage, ImageColumn} from '../styles/styled-components'

function Project({name, description, screenshot, slug, stack, alt}) {
  return (
    <ProjectWrapper>
      <Col md={{size: 6, order: alt ? 2 : 1}}>
        <h3>{name}</h3>
        <p>{description}</p>
        <Row>
          <Col>
            <ul>{stack && stack.map(({tech, id}, i) => i < 3 && <li key={id}>{tech}</li>)}</ul>
          </Col>
          <Col>
            <ul>{stack && stack.map(({tech, id}, i) => i >= 3 && <li key={id}>{tech}</li>)}</ul>
          </Col>
        </Row>
        <Link className="btn btn-dark-outline" to={slug}>
          View Project
        </Link>
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

const ProjectWrapper = styled(Row)`
  padding: 3em 1em;
`

export default Project
