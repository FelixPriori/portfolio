import React from 'react'
import { ReactComponent as GitHub } from '../../images/logo-github.svg'
import { ReactComponent as LinkedIn } from '../../images/logo-linkedin.svg'
import { ReactComponent as Bluesky } from '../../images/logo-bluesky.svg'
import {
	List,
	ListItem,
	StyledIconLink,
	SrOnly,
} from '../../styles/styled-components'

function SocialListItem({ link, label, children }) {
	return (
		<ListItem>
			<StyledIconLink
				href={link}
				target="_blank"
				rel="noreferrer"
				title={label}
			>
				{children}
				<SrOnly>{label}</SrOnly>
			</StyledIconLink>
		</ListItem>
	)
}

function SocialList() {
	return (
		<List>
			<SocialListItem
				link="https://www.linkedin.com/in/felix-rioux-sabourin/"
				label="Opens Felix's LinkedIn profile"
			>
				<LinkedIn aria-hidden="true" focusable="false" />
			</SocialListItem>
			<SocialListItem
				link="https://github.com/FelixPriori/"
				label="Opens FelixPriori's Github"
			>
				<GitHub aria-hidden="true" focusable="false" />
			</SocialListItem>
			<SocialListItem
				link="https://bsky.app/profile/felixpriori.dev"
				label="Opens @felixpriori.dev on Bluesky"
			>
				<Bluesky aria-hidden="true" focusable="false" />
			</SocialListItem>
		</List>
	)
}

export default SocialList
