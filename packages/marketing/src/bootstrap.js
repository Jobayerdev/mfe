import { createBrowserHistory, createMemoryHistory } from "history"

import App from "./App"
import React from "react"
import ReactDOM from "react-dom"

const mount = (el, { onNavigate, defaultHistory }) => {
	const history = defaultHistory || createMemoryHistory()
	if (onNavigate) {
		history.listen(onNavigate)
	}
	ReactDOM.render(<App history={history} />, el)

	return {
		onPatentNavigate({ pathname: nextPathname }) {
			if (history.pathname !== nextPathname) {
				history.push(nextPathname)
			}
		},
	}
}

if (process.env.NODE_ENV === "development") {
	const devRoot = document.querySelector("#_marketing-dev-root")
	if (devRoot) {
		mount(devRoot, { defaultHistory: createBrowserHistory() })
	}
}

export { mount }
