import { BrowserRouter } from "react-router-dom"
import MarketingApp from "./components/MarketingApp"
import React from "react"
import { StylesProvider } from "@material-ui/core/styles"

export default () => {
	console.log("Hi there this is container")
	return (
		<BrowserRouter>
			<StylesProvider>
				<div>
					<MarketingApp />
				</div>
			</StylesProvider>
		</BrowserRouter>
	)
}
