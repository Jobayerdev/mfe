import { Route, Router, Switch } from "react-router-dom"

import Landing from "./components/Landing"
import Pricing from "./components/Pricing"
import React from "react"
import { StylesProvider } from "@material-ui/core/styles"

export default ({ history }) => {
	return (
		<div>
			<StylesProvider>
				<Router history={history}>
					<Switch>
						<Route exact path="/pricing" component={Pricing} />
						<Route path="/" component={Landing} />
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	)
}
