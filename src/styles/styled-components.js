import styled, { css } from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { Col, Row } from 'reactstrap'
import { Link } from 'gatsby'

const shadow = `1px 1px 10px var(--color-dark)`

export const Main = styled.main``

export const SectionWrapper = styled.section`
	&:first-of-type {
		padding-top: 4rem;
	}
	&:last-of-type {
		padding-bottom: 4rem;
	}
`

export const HeroWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	@media (max-width: 768px) {
		align-items: center;
	}
`

export const TextInnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 768px) {
		align-items: center;
		text-align: center;
		margin-bottom: 2rem;
	}
`

export const AvatarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const StyledLink = styled(Link)`
	color: var(--color-primary);
	font-size: 20px;
	transition: color 250ms ease-in-out;

	&:hover {
		color: var(--color-primary-dark);
	}
`

export const StyledProjectLink = styled(Link)`
	margin: 1em;
`

export const StyledIconLink = styled(OutboundLink)`
	color: var(--color-primary);
	font-size: 20px;
	transition: color 200ms ease-in;

	svg {
		height: 28px;
		width: 28px;
		fill: var(--color-primary-dark);
		transition: fill 200ms ease-in;
	}

	&:hover {
		text-decoration: none;
		color: var(--color-primary-light);

		svg {
			fill: var(--color-primary-light);
		}
	}
`

export const Title = styled.h1`
	font-size: clamp(2rem, -0.4234rem + 5.0553vw, 4rem);
	${props =>
		props.$bg &&
		css`
			background-image: url(${props.$bg});
		`}
	background-size: 250px;
	background-repeat: repeat;
	color: transparent;
	background-clip: text;
	/* text-shadow: 0px 4px 10px var(--color-dark); */

	@media (max-width: 768px) {
		font-size: clamp(2.5rem, 1.7857rem + 3.5714vw, 3.5rem);
		line-height: 0.85;
	}
`

export const BigText = styled.h2`
	font-size: clamp(1.5rem, -0.6205rem + 4.4234vw, 3.25rem);
	font-weight: 100;
	line-height: 0.85;

	@media (max-width: 768px) {
		font-size: clamp(2rem, 1.2857rem + 3.5714vw, 3rem);
	}
`

export const Subtitle = styled.h2`
	position: relative;
	margin-bottom: 1rem;
	&:after {
		content: '';
		position: absolute;
		height: 6px;
		width: 4rem;
		bottom: -8px;
		left: 0;
		background-color: var(--color-primary-light);
		border-radius: 6px 0 6px 0;
	}
`

export const WorkFeatureWrapper = styled.div``

export const WorkLogoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 0.5rem;
`

export const CompanyName = styled.h3`
	font-size: clamp(1.25rem, 0.6424rem + 1.2658vw, 1.75rem);
`

export const DateRange = styled.p`
	font-style: italic;
`

export const TextColumn = styled(Col)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const Paragraph = styled.p`
	margin: 0;
	padding: 1rem 0;
	line-height: 180%;
	letter-spacing: 0.15ch;

	&:first-of-type {
		padding-top: 0;
	}
	&:not(:last-of-type) {
		padding-bottom: 0;
	}
`

export const ImageColumn = styled(Col)`
	display: flex;
	align-items: center;
`

export const HeaderContainer = styled.div`
	height: 100%;
	padding: 1em 0;
`

export const List = styled.ul`
	display: flex;
	justify-content: center;
	width: 100%;
	list-style: none;
	margin: 0;
	padding: 0;
`

export const ListItem = styled.li`
	margin: 0.5em;
`

export const ErrorMessage = styled.div`
	color: var(--color-secondary);
`

export const ContactSectionWrapper = styled.footer`
	padding: 4em 0;
	color: var(--color-light);
	background-color: var(--color-primary-dark);

	a {
		color: var(--color-light);
	}
`

export const TitleContainer = styled.div`
	padding: 2em 0;
`

export const ProjectWrapper = styled(Row)`
	padding: 1em 0;
`

export const StackRow = styled(Row)`
	padding: 1em 0;
	ul {
		margin-bottom: 0;
	}
`

export const FormWrapper = styled(Col)``

export const Showcase = styled.div``

export const ImageWithShadow = styled.img`
	box-shadow: ${shadow};
	height: ${({ height }) => (height ? `${height}px` : '')};
	width: ${({ width }) => (width ? `${width}px` : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '')};
	margin: 1em 0;
	border-radius: 5px;
`

export const DivWithShadow = styled.div`
	box-shadow: ${shadow};
	background-color: var(--color-shoppies-light);
	border-radius: 5px;
`

export const LogoBulletList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 1rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
	column-gap: 0.5rem;
`

export const LogoBulletItem = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 0.25rem;
	white-space: nowrap;
	> img {
		margin-right: 1rem;
	}
`

export const ReactSpinningLogo = styled.img`
	height: ${({ height }) => (height ? `${height}px` : '60px')};
	width: ${({ width }) => (width ? `${width}px` : '60px')};
	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	animation: App-logo-spin infinite 20s linear;
`

export const Logo = styled.img`
	height: ${({ height }) => (height ? `${height}px` : '')};
	width: ${({ width }) => (width ? `${width}px` : '')};
`

export const LogoLinkedContainer = styled(OutboundLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1em;
	min-width: 120px;
	max-width: 120px;
	min-height: 60px;
	max-height: 120px;
	background-color: var(--color-light);
	border-radius: 5px;
	box-shadow: inset 1px 1px 10px var(--color-primary-lighter);
`

export const LogoCol = styled(Col)`
	display: flex;
	align-items: center;

	h3 {
		margin-left: 2em;
	}
`

export const LogoBoxCol = styled(Col)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	height: 300px;
	width: 100%;
`

export const MessagePreviewList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	li {
		margin: 0;
		padding: 1em;
	}
`

export const PostersContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`

export const SubSection = styled.div`
	padding: 2em 0;
`

export const RedLight = styled.div`
	min-width: 5px;
	min-height: 5px;
	max-width: 5px;
	max-height: 5px;
	background-color: var(--color-secondary);
	border-radius: 50%;
	box-shadow: 1px 1px 5px var(--color-secondary),
		-1px -1px 5px var(--color-secondary), -1px 1px 5px var(--color-secondary),
		1px -1px 5px var(--color-secondary);
`

export const FooterWrapper = styled.footer`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: baseline;
	align-content: baseline;
	padding-top: 4em;
`

export const GithubLink = styled(OutboundLink)`
	display: flex;
	align-items: center;
	padding: 0;
	margin: 0;
	svg {
		margin-left: 1em;
		height: 32px;
		width: 32px;
		fill: var(--color-light);
	}

	&:hover {
		color: var(--color-primary-light);
		svg {
			fill: var(--color-primary-light);
		}
	}
`

export const ButtonContainer = styled.div`
	& > a:not(:last-of-type) {
		margin-right: 0.5em;
	}
`

export const CustomInput = styled.input`
	padding: 0.75rem 1.25rem;
	display: block;
	width: 100%;
	border: 2px solid
		${({ $error }) => ($error ? 'var(--color-secondary)' : 'var(--color-dark)')};
	border-radius: 0.375rem;

	&:focus-within {
		outline: 2px solid var(--color-highlight);
		outline-offset: 1px;
	}
`

export const CustomTextarea = styled.textarea`
	display: block;
	width: 100%;
	padding: 0.75rem 1.25rem;
	border: 2px solid
		${({ $error }) => ($error ? 'var(--color-secondary)' : 'var(--color-dark)')};
	border-radius: 0.375rem;

	&:focus-within {
		outline: 2px solid var(--color-highlight);
		outline-offset: 1px;
	}
`

export const CustomLabel = styled.label`
	margin-bottom: 0.25rem;
	margin-left: 2px;
	font-size: 1.15rem;
	font-weight: 600;
`

export const FormInputWrapper = styled.div`
	margin: 1.5rem 0;
`

export const Mark = styled.mark`
	margin: 0 -0.2em;
	padding: 0.1em 0.25em;
	border-radius: 0.8em 0.3em;
	background-color: transparent;
	background-image: linear-gradient(
		to right,
		rgba(235, 203, 139, 0.3),
		rgba(235, 203, 139, 0.9) 2%,
		rgba(235, 203, 139, 0.5)
	);
	box-decoration-break: clone;
`

export const SubmitButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`
