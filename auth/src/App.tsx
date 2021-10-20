import { AppProvider } from "@shared/context"
import AuthRoutes from "@modules/auth/routes"
import React from "react"

const App = () => {
	return (
		<AppProvider>
			<AuthRoutes />
		</AppProvider>
	)
}

export default App
