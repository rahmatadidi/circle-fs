import { Box, BoxProps, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { ApiHomePage } from "../libs/api";
import { useDispatch } from "react-redux";
import { SET_USER } from "../redux/slices/auth-slice";
import { useNavigate } from "react-router-dom";

interface LoginFormProps extends BoxProps {}

type LoginForm = {
  email: string;
  password: string;
};

export function LoginPage(props: LoginFormProps) {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  }
  async function handleSubmit() {
    try {
      const response = await ApiHomePage.post("auth/login", form);
      console.log(response.data);
      const token = response.data.token;
      const user = response.data.user;

      if (token) {
        localStorage.setItem("token", response.data.token);
      }
      if (user) {
        dispatch(SET_USER(user));
        navigate("/auth/homepage");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box {...props}>
      <div
        style={{
          width: "100%",
          height: "739px",
          backgroundColor: "#2C2C2C",
        }}
      >
        <div
          style={{
            width: "26%",
            backgroundColor: "#2C2C2C",
            margin: "auto",
            padding: "10rem",
          }}
        >
          <h1
            style={{
              color: "#8066FF",
              margin: "0",
            }}
          >
            MyCircle
          </h1>
          <h3
            style={{
              color: "#fff",
            }}
          >
            Login To MyCircle
          </h3>
          <Input
            placeholder="Email/Username"
            name="email"
            onChange={handleChange}
            style={{
              width: "90%",
              padding: "1rem",
              borderRadius: "10px",
              backgroundColor: "#2C2C2C",
              outline: "none",
              border: "2px solid #444545",
              margin: "10px 0",
              color: "#fff",
            }}
          />
          <Input
            name="password"
            onChange={handleChange}
            placeholder="Password"
            type="password"
            style={{
              width: "90%",
              padding: "1rem",
              borderRadius: "10px",
              backgroundColor: "#2C2C2C",
              outline: "none",
              border: "2px solid #444545",
              margin: "10px 0",
              color: "#fff",
            }}
          />
          <a
            href=""
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Forgot Password?
          </a>
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              border: "none",
              backgroundColor: "#8066FF",
              width: "100%",
              color: "#fff",
              borderRadius: "20px",
              padding: "10px",
              cursor: "pointer",
              justifyContent: "center",
              display: "block",
              margin: "2rem auto",
            }}
          >
            Login
          </button>
          <p
            style={{
              color: "#fff",
            }}
          >
            Don't Have an account yet?
            <a
              style={{
                textDecoration: "none",
              }}
              href="#"
            >
              <span style={{ color: "#8066FF" }}> Create Account</span>
            </a>
          </p>
        </div>
      </div>
    </Box>
  );
}
