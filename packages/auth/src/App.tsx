import { BrowserRouter, MemoryRouter } from "react-router-dom"

import { AppProvider } from "@shared/context"
import AuthRoutes from "@modules/auth/routes"
import React from "react"

const App = ({ history }: any) => {
	const isProd = process.env.NODE_ENV === "production"
	// console.log("🚀 ~ file: App.tsx ~ line 9 ~ App ~ isProd", isProd)
	return (
		<AppProvider>
			{isProd ? (
				<MemoryRouter initialEntries={history}>
					<AuthRoutes />
				</MemoryRouter>
			) : (
				<BrowserRouter>
					<AuthRoutes />
				</BrowserRouter>
			)}
		</AppProvider>
	)
}

export default App
