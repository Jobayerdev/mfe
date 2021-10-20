import { Button, Form, Input } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"

import { IMAGES } from "../../../@shared/assets"
import { Link } from "react-router-dom"
import React from "react"

const Login = () => {
	return (
		<div className="lg:grid grid-cols-12 gap-10 h-screen w-screen">
			<div
				className="hidden lg:flex col-span-4 h-full p-10  flex-col justify-between"
				style={{
					background: `url(${IMAGES.textureBg})`,
					backgroundSize: "cover",
					backgroundPosition: "center right",
					backgroundRepeat: "no-repeat",
				}}>
				<div>
					<h2 className="text-2xl text-white font-extrabold font-museo mb-2">
						Monitoring Dashboard
					</h2>
					<span className="font-bold text-sm text-white">MessageAnalytica</span>
				</div>
				<span className="font-bold text-sm text-white">
					{new Date().getFullYear()} MessageAnalytica. All rights reserved.
				</span>
			</div>
			<div className="col-span-8 h-full w-full flex items-center justify-center">
				<div className="p-10 w-full shadow- bg-white" style={{ maxWidth: 480 }}>
					<h2 className="text-2xl text-primary font-semibold font-museo">
						Sign In
					</h2>
					<p className="text-black font-bold text-sm mb-7 font-museo">
						Sign in by entering information below
					</p>
					<Form
						className="w-full "
						initialValues={{ phoneNumber: "01900000", password: "123456" }}
						onFinish={(val) => {}}>
						<Form.Item
							name="phoneNumber"
							rules={[
								{ required: true, message: "Please input your phone Number!" },
							]}>
							<Input
								className="border-primary"
								type="tel"
								size="large"
								prefix={<UserOutlined className="site-form-item-icon" />}
								placeholder="Phone Number"
							/>
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{ required: true, message: "Please input your Password!" },
							]}>
							<Input
								className="border-primary"
								size="large"
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Password"
							/>
						</Form.Item>

						<Form.Item>
							<Button
								size="large"
								style={{ display: "block", width: "100%" }}
								type="primary"
								htmlType="submit">
								Sign in
							</Button>
							<p className="py-3 text-black">
								Don't have an account{" "}
								<Link
									to={"/register"}
									className="text-primary font-medium cursor-pointer">
									Sign up
								</Link>
							</p>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default Login
