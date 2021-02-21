import React from 'react'
import styled from 'styled-components'
import {Container} from 'reactstrap'
import StyledHeader from './StyledHeader'
import Project from './Project'
import {Subtitle} from '../styles/styled-components'
import Shoppies from '../images/shoppies.png'
import SideQuests from '../images/side-quests.png'

const shoppiesStack = [
  {tech: 'React', id: 1},
  {tech: 'Styled-Components', id: 2},
  {tech: 'Sass', id: 3},
  {tech: 'Bootstrap', id: 4},
  {tech: 'Jest', id: 5},
  {tech: 'OMDb API', id: 6},
]

const sideQuestsStack = [
  {tech: 'React', id: 1},
  {tech: 'Sass', id: 2},
  {tech: 'Bootstrap', id: 3},
  {tech: 'Expressjs', id: 4},
  {tech: 'Nodejs', id: 5},
  {tech: 'PostgreSQL', id: 6},
]

function ProjectsSection() {
  return (
    <ProjectsSectionWrapper id="projects">
      <Container>
        <StyledHeader>
          <Subtitle>Projects</Subtitle>
        </StyledHeader>
        <Project
          name="Shoppies"
          description="Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies."
          slug="/under-construction"
          screenshot={Shoppies}
          stack={shoppiesStack}
        />
        <Project
          name="Side Quests"
          description="SideQuests is a web app which facilitates helping people in need, solving current world issues on a small scale with a fun fantasy theme. As an adventurer, you can pick a class, view what villager requests are available to you in your area, and complete them to earn badges, and level up your character. As a villager, you can post a request, and get the help of an adventurer in your area depending on the request type."
          slug="/under-construction"
          screenshot={SideQuests}
          stack={sideQuestsStack}
          alt
        />
      </Container>
    </ProjectsSectionWrapper>
  )
}

export default ProjectsSection

const ProjectsSectionWrapper = styled.section``
