import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
	position: sticky;
	top: 20%;
	bottom: 20%;
	max-height: fit-content;
`

const OrderedList = styled.ol`
	list-style: none;
`

const ListItem = styled.li``

const NavLink = styled(Link)`
	font-size: 1.25rem;
	text-decoration: none;
	color: var(--color-text);
	transition: all 300ms ease-in;

	&:hover,
	&.active {
		color: var(--color-primary-light);
		text-decoration: underline;
		text-underline-offset: 3px;
		text-decoration-thickness: 2px;
	}
`

const activeStyle = {
	color: 'var(--color-primary-light)',
	textDecoration: 'underline',
	textUnderlineOffset: '3px',
	textDecorationThickness: '2px',
}

export default function Navigation() {
	return (
		<Nav>
			<OrderedList>
				<ListItem>
					<NavLink to="">Introduction</NavLink>
				</ListItem>
				<ListItem>
					<NavLink activeStyle={activeStyle} to="#about">
						About
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink activeClassName="active" to="#technologies">
						Technologies
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink activeClassName="active" to="#work-history">
						Work History
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink activeClassName="active" to="#testimonials">
						Testimonials
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink activeClassName="active" to="#contact">
						Contact
					</NavLink>
				</ListItem>
			</OrderedList>
		</Nav>
	)
}
