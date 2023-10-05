import { useState } from "react";
import "./App.css";
import { Form, Input, Space, Button } from "antd";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import Text from "./components/Text";
function App() {
  const [icons, setIcons] = useState(false);
  const schema = yup.object().shape({
    username: yup.string().min(3).max(20).required("Name field is required"),
    lastname: yup.string().min(3).max(20).required("Surname field is required"),
    email: yup
      .string()
      .email("Write a correct email address")
      .required("Email field is required"),
    phonenumber: yup
      .string()
      .matches(
        /^\+\d{12}$/,
        "Phone number must be 12 digits long and start with + symbol"
      )
      .required("Phone Number field is required"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
  };
  const onFailed = () => {
    if (errors) {
      setIcons(true);
    } else {
      setIcons(false);
    }
  };
  console.log(icons);
  return (
    <section className="form_space">
      {errors.username ||
      errors.lastname ||
      errors.email ||
      errors.phonenumber ? (
        <Text/>
      ) : null}
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical" size="large">
        <Form.Item
          hasFeedback
          label="User Name"
          validateStatus={errors.username ? "error" : icons ? "success" : ""}
          help={errors.username ? errors.username.message : ""}
        >
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} style={{ width: "400px" }} placeholder="Name" />
            )}
          />
        </Form.Item>

        <Form.Item
          size="large"
          label="Last Name"
          hasFeedback
          validateStatus={errors.lastname ? "error" : icons ? "success" : ""}
          help={errors.lastname ? errors.lastname.message : ""}
        >
          <Controller
            name="lastname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                style={{ width: "400px" }}
                placeholder="Surname"
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          hasFeedback
          validateStatus={errors.email ? "error" : icons ? "success" : ""}
          help={errors.email ? errors.email.message : ""}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                style={{ width: "400px" }}
                placeholder="Email"
              />
            )}
          />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          hasFeedback
          validateStatus={errors.phonenumber ? "error" : icons ? "success" : ""}
          help={errors.phonenumber ? errors.phonenumber.message : ""}
        >
          <Controller
            name="phonenumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} style={{ width: "400px" }} placeholder="+994" />
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button block onClick={onFailed} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}

export default App;
