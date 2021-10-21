import { Button, Layout, Menu } from "antd"

import { Link } from "react-router-dom"
import React from "react"

const { Header, Footer, Content } = Layout

const LandingPage = () => {
	return (
		<Layout className="h-screen w-screen">
			<Header className="flex items-center w-full">
				<img src="https://i.ibb.co/wB0jZJM/logo.png" className="h-16" />
				<Menu
					className="w-full"
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["2"]}>
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu>
			</Header>
			<Content className="h-full p-10">
				<div className="text-center mt-40 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold">Home Page</h2>
					<p className="font-medium text-gray-900">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
						incidunt laudantium quae dicta porro obcaecati repudiandae alias
						ipsam sapiente. Esse nemo aliquid recusandae corporis ipsam
						assumenda minima, voluptas laboriosam! Fugit!
					</p>
					<div className="flex justify-center space-x-2 mt-10">
						<Link to="/auth">
							<Button type="primary">Sign Up</Button>
						</Link>
						<Link to="/pricing">
							<Button type="primary">Pricing</Button>
						</Link>
					</div>
				</div>
			</Content>
			<Footer>Footer</Footer>
		</Layout>
	)
}

export default LandingPage
