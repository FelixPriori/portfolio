export const getScrollPosition = element => {
	const isBrowser = typeof window !== `undefined`

	if (!isBrowser) return 0

	return element.getBoundingClientRect().top
}
