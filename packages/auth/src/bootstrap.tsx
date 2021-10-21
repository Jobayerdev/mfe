import "./style.scss"

import App from "./App"
import React from "react"
import ReactDOM from "react-dom"
import { createMemoryHistory } from "history"

type MountOptions = {
	initialPath?: string
	onNavigate?: any
}

const mount = (el: Element, { initialPath, onNavigate }: MountOptions) => {
	const history = createMemoryHistory({ initialEntries: [initialPath] })

	if (onNavigate) {
		history.listen(onNavigate)
	}
	ReactDOM.render(<App history={history} />, el)
}

if (process.env.NODE_ENV === "development") {
	const devRoot = document.querySelector("#_dev_auth")
	if (devRoot) {
		mount(devRoot, { initialPath: "/" })
	}
}

export { mount }
