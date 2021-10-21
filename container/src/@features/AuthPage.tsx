import React, { useEffect, useRef } from "react"

import { mount } from "auth/AuthApp"

const AuthPage = () => {
	const ref = useRef(null)

	useEffect(() => {
		mount(ref.current)
	}, [])
	return <div ref={ref}>Auth</div>
}

export default AuthPage
