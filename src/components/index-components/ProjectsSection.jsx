import React from 'react'
import { Container } from 'reactstrap'
import Project from './Project'
import {
	Subtitle,
	SectionWrapper,
	SubtitleWrapper,
} from '../../styles/styled-components'
import Shoppies from '../../images/shoppies.png'
// import SideQuests from '../../images/side-quests.png'

const shoppiesStack = [
	{ tech: 'React', id: 1 },
	{ tech: 'Styled-Components', id: 2 },
	{ tech: 'Sass', id: 3 },
	{ tech: 'Bootstrap', id: 4 },
	{ tech: 'Jest', id: 5 },
	{ tech: 'OMDb API', id: 6 },
]

// const sideQuestsStack = [
//   {tech: 'React', id: 1},
//   {tech: 'Sass', id: 2},
//   {tech: 'Bootstrap', id: 3},
//   {tech: 'Expressjs', id: 4},
//   {tech: 'Nodejs', id: 5},
//   {tech: 'PostgreSQL', id: 6},
// ]

function ProjectsSection() {
	return (
		<SectionWrapper id="projects">
			<Container>
				<SubtitleWrapper>
					<Subtitle>Projects</Subtitle>
				</SubtitleWrapper>
				<Project
					name="Shoppies"
					description="Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies."
					slug="/shoppies"
					screenshot={Shoppies}
					stack={shoppiesStack}
				/>
			</Container>
		</SectionWrapper>
	)
}

export default ProjectsSection
