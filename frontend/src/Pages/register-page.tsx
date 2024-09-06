import { Box, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export const RegisterPage = () => {
  const [password, setPassword] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <Box
        style={{
          width: "100%",
          height: "739px",
          backgroundColor: "#2C2C2C",
        }}
      >
        <Box
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
            placeholder="Full Name"
            type="text"
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
            placeholder="Email/Username"
            type="text"
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
            value={password}
            onChange={handleChange}
            id="password"
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

          <button
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
            Register
          </button>
        </Box>
      </Box>
    </>
  );
};
