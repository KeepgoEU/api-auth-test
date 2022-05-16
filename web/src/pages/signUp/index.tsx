import { Button, Form, Input } from "antd";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { instance, setToken } from "../../utility";

export const SignUp = () => {
  let navigate = useNavigate();
  const onFinish = async (values: any) => {
    const { data } = await instance.post("/api/auth/sign-up", {
      email: values.username,
      password: values.password,
      device_name: "asdas",
      name: values.name,
    });
    setToken(data);
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
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="username"
          rules={[{ required: true, message: "Please input your email!" }]}
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
      </Form>
    </div>
  );
};
