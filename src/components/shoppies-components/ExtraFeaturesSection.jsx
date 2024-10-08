import React from 'react'
import {
	Row,
	Col,
	Card,
	CardBody,
	CardText,
	Spinner,
	Container,
} from 'reactstrap'
import {
	Subtitle,
	Paragraph,
	SectionWrapper,
	MessagePreviewList,
	PostersContainer,
	SubSection,
	DivWithShadow,
	SubtitleWrapper,
} from '../../styles/styled-components'
import { StaticImage } from 'gatsby-plugin-image'

function MessagesPreview() {
	return (
		<DivWithShadow>
			<MessagePreviewList>
				<li>
					<Card role="alert">
						<CardBody>
							<CardText>
								Use the search bar to find a movie to nominate
							</CardText>
						</CardBody>
					</Card>
				</li>
				<li>
					<Card inverse color="danger" role="alert">
						<CardBody>
							<CardText>There was a problem with your search</CardText>
						</CardBody>
					</Card>
				</li>
				<li>
					<Card inverse color="success">
						<CardBody>
							<CardText>Thank you for your nominations!</CardText>
						</CardBody>
					</Card>
				</li>
				<li className="d-flex justify-content-center">
					<Spinner color="dark" />
				</li>
			</MessagePreviewList>
		</DivWithShadow>
	)
}

function ExtraFeaturesSection() {
	return (
		<SectionWrapper id="extra">
			<Container>
				<SubtitleWrapper>
					<Subtitle>Extra Features</Subtitle>
				</SubtitleWrapper>
				<SubSection>
					<Row>
						<Col lg={6}>
							<h3>Prompts & Messages</h3>
							<Paragraph>
								I wanted the user to be guided seamlessly through the nomination
								process, which is why I decided to have cards, made with
								Bootstrap, that prompt users toward the next step.
							</Paragraph>
							<Paragraph>
								Behind the scenes, the status of the search will update while
								the user interacts with the search bar. The status can either be
								<strong> idle, pending, rejected or resolved.</strong> As the
								status updates, the UI changes along with it.
							</Paragraph>

							<ul>
								<li>
									<strong>idle</strong>: the prompt will tell the user to use
									the search bar.
								</li>
								<li>
									<strong>pending</strong>: a loading animation will tell the
									user a search has been triggered.
								</li>
								<li>
									<strong>rejected</strong>: the card will display the error
									message.
								</li>
								<li>
									<strong>resolved</strong>: the list of search results will be
									displayed.
								</li>
							</ul>
						</Col>
						<Col>
							<MessagesPreview />
						</Col>
					</Row>
				</SubSection>
				<SubSection>
					<Row>
						<Col lg={6}>
							<h3>Movie Card</h3>
							<Paragraph>
								In addition to the required title and date, I decided to also
								show the user the movie poster, and in case the poster was not
								available, show a custom fallback image instead.
							</Paragraph>
							<Paragraph>
								The buttons at the bottom of the app will appear and change
								depending on whether or not the movie is in the nomination list
								or not.
							</Paragraph>
						</Col>
						<Col>
							<PostersContainer>
								<StaticImage
									style={{
										boxShadow: `1px 1px 10px black`,
										borderRadius: '5px',
									}}
									imgStyle={{ borderRadius: '5px' }}
									src="../../images/shoppies-poster.png"
									alt="Shoppies Posters"
									objectFit="contain"
								/>
							</PostersContainer>
						</Col>
					</Row>
				</SubSection>
				<SubSection>
					<Row>
						<Col lg={6}>
							<h3>Misc</h3>
							<ul>
								<li>
									The app saves the user's nominations list to local storage,
									and retrieves it at the next visit using a custom hook
								</li>
								<li>
									A counter at the top of the nominations list keeps track of
									how many nominations are in the list out of 5.
								</li>
								<li>
									A small delay is added to the search so that the app does not
									hammer the API on each keystroke. Instead, it waits for the
									user to finish typing before triggering the search.
								</li>
								<li>
									The `Clear Search` button resets the status to idle and clears
									the movies list.
								</li>
								<li>
									Tests cover the API with a mocked API using Mock Service
									Worker (MSW) alongside @testing-library/react to improve
									confidence in the app and the API.
								</li>
								<li>
									The helper functions are also tested using
									@testing-library/react
								</li>
							</ul>
						</Col>
					</Row>
				</SubSection>
			</Container>
		</SectionWrapper>
	)
}

export default ExtraFeaturesSection
