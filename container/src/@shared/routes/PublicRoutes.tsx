import { Navigate, useRoutes } from "react-router-dom"

import AuthPage from "../../@features/AuthPage"
import React from "react"

const PublicRoutes = () => {
	return useRoutes([
		{
			path: "",
			element: <Navigate to="/auth" />,
		},
		{
			path: "auth",
			element: <AuthPage />,
		},
		{
			path: "*",
			element: <Navigate to="/" />,
		},
	])
}

export default PublicRoutes
