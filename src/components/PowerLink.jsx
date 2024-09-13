import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import styled from 'styled-components'

const PowerLinkWrapper = styled(Link)`
	display: inline-block;
	position: relative;
	padding: 0.75rem 2rem;
	border-radius: 12px;
	box-shadow: inset 1px 1px 10px var(--color-dark);
	overflow: hidden;
	text-decoration: none;
	color: var(--color-light);
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 0.2ch;
	cursor: pointer;
`

const PowerOutboundLinkWrapper = styled(OutboundLink)`
	display: inline-block;
	position: relative;
	padding: 0.75rem 2rem;
	border-radius: 12px;
	box-shadow: inset 1px 1px 10px var(--color-dark);
	overflow: hidden;
	text-decoration: none;
	color: var(--color-light);
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 0.2ch;
	cursor: pointer;
`

const InnerWrapper = styled.div`
	overflow: hidden;
`

const PowerLinkBackground = styled.div`
	--first-color: ${({ $color }) =>
		$color === 'primary'
			? 'var(--color-primary-dark)'
			: 'var(--color-highlight-darkest)'};
	--second-color: ${({ $color }) =>
		$color === 'primary'
			? 'var(--color-primary)'
			: 'var(--color-highlight-darker)'};
	--third-color: ${({ $color }) =>
		$color === 'primary'
			? 'var(--color-primary-light)'
			: 'var(--color-highlight)'};

	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(
		30deg,
		var(--first-color) 0%,
		var(--second-color) 35%,
		var(--third-color) 100%
	);
	transition: transform 0.5s ease-in;
	transform-origin: left;
	z-index: -1;

	${PowerOutboundLinkWrapper}:hover &,
	${PowerLinkWrapper}:hover & {
		transform: scale(2);
	}
`

export default function PowerLink({ to, children, color = 'primary' }) {
	return (
		<PowerLinkWrapper to={to}>
			<InnerWrapper>
				<PowerLinkBackground $color={color} />
				{children}
			</InnerWrapper>
		</PowerLinkWrapper>
	)
}

export function PowerOutboundLink({
	href,
	rel,
	target,
	children,
	color = 'primary',
}) {
	return (
		<PowerOutboundLinkWrapper href={href} rel={rel} target={target}>
			<InnerWrapper>
				<PowerLinkBackground $color={color} />
				{children}
			</InnerWrapper>
		</PowerOutboundLinkWrapper>
	)
}
