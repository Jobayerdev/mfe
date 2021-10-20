import { Navigate, useRoutes } from "react-router-dom"

import Login from "./Login"
import React from "react"
import Register from "./Register"

const AuthRoutes = () => {
	return useRoutes([
		{
			path: "",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "*",
			element: <Navigate to="/register" />,
		},
	])
}

export default AuthRoutes
