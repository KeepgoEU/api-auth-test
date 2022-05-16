import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import "./login.style.css";
import { instance, setToken } from "../utility";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();
  const onFinish = async (values: any) => {
    const { data } = await instance.post("/api/auth/login", {
      email: values.username,
      password: values.password,
      device_name: "asdas",
    });
    setToken(data);
    console.log(data);
    navigate("/user");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div id="components-form-demo-normal-login">
      <Form
        name="basic"
        className="login-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Link to={"/sign-up"}>Create account</Link>
      </Form>
    </div>
  );
};
