import { Navigate, useRoutes } from "react-router-dom"

import AuthApp from "../../@features/AuthApp"
import LandingPage from "../../@features/LandingPage"
import PricingPage from "../../@features/PricingPage"
import React from "react"

const PublicRoutes = () => {
	return useRoutes([
		{
			path: "",
			element: <LandingPage />,
		},
		{
			path: "auth",
			element: <AuthApp />,
		},
		{
			path: "pricing",
			element: <PricingPage />,
		},
		{
			path: "*",
			element: <Navigate to="/" />,
		},
	])
}

export default PublicRoutes
