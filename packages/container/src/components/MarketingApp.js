import React, { useEffect, useRef } from "react"

import { mount } from "marketing/MarketingApp"
import { useHistory } from "react-router-dom"

const MarketingApp = () => {
	const history = useHistory()
	const ref = useRef(null)

	useEffect(() => {
		const { onPatentNavigate } = mount(ref.current, {
			onNavigate: ({ pathname: nextPathname }) => {
				const { pathname } = history.location
				if (pathname !== nextPathname) {
					history.push("/pricing")
				}
			},
		})

		history.listen(onPatentNavigate)
	}, [])
	return <div ref={ref}></div>
}

export default MarketingApp
