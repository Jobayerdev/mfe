import React, { useEffect, useRef } from "react"

import { mount } from "auth/AuthApp"

const AuthApp = () => {
	const ref = useRef(null)

	const pathName = window.location.pathname

	useEffect(() => {
		mount(ref.current, {
			initialPath: pathName,
		})
	}, [])
	return (
		<div ref={ref} id="auth-mfe">
			Auth
		</div>
	)
}

export default AuthApp

// const AuthApp = () => {
// 	return <div>Auth</div>
// }

// export default AuthApp
