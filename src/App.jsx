import { useState } from "react";
import "./App.css";
import { Form, Input, Space, Button } from "antd";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

function App() {
  const schema = yup.object().shape({
    username: yup.string().required("Name field is required"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item
        label="User Name"
        validateStatus={errors.username ? "error" : ""}
        help={errors.username ? errors.username.message : ""}
      >
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{ required: "User Name is requied" }}
          render={({ field }) => <Input {...field} placeholder="Name" />}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    // <Space>
    //   <Form onSubmit={handleSubmit(onSubmit)}>
    //     <Form.Item label="User Name" name="username">
    //       <Input placeholder="User Name" {...register("username")}></Input>
    //     </Form.Item>
    //     <Form.Item label="Last Name" name="lastname">
    //       <Input placeholder="Last Name" {...register("lastname")}></Input>
    //     </Form.Item>
    //     <Form.Item label="Email" name="email">
    //       <Input placeholder="Email" {...register("email")}></Input>
    //     </Form.Item>
    //     <Form.Item label="PhoneNumber" name="phonenumber">
    //       <Input
    //         placeholder="Phone Number"
    //         {...register("phonenumber")}
    //       ></Input>
    //     </Form.Item>

    //     <Button type="primary">Submit</Button>
    //   </Form>
    // </Space>
  );
}

export default App;
