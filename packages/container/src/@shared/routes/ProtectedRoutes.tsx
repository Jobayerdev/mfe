import { Navigate, Outlet, RouteObject, useRoutes } from "react-router-dom"

import DashboardPage from "../../@features/DashboardPage"
import MainLayout from "../components/layout/main-layout.component"
import React from "react"

const App = () => {
	let pathName = window.location.pathname
	return (
		<MainLayout>
			{pathName === "/" ? <DashboardPage /> : ""}
			<Outlet />
		</MainLayout>
	)
}

const ProtectedRoutes = () => {
	const routes: RouteObject[] = [
		{
			path: "dashboard",
			element: <DashboardPage />,
		},
	]

	return useRoutes([
		{
			path: "",
			element: <App />,
			children: routes,
		},
		{
			path: "*",
			element: <Navigate to={"/"} />,
		},
	])
}

export default ProtectedRoutes
