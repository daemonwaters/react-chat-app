import React from "react";
import { GoogleAuthProvider } from "@firebase/auth";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "./config";
import { FaTelegramPlane } from "react-icons/fa";

const Form = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 10rem;

  svg {
    font-size: 5rem;
  }

  h3 {
    text-transform: capitalize;
    padding: 1rem 0;
  }

  button {
    padding: 0.5rem 0.8rem;
    maring: 0.5rem 0;
    border: none;
    background: #fff;
    color: #000;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    text-transform: capitalize;
  }
`;

function SignIn() {
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <Form>
      <FaTelegramPlane />
      <h3>Sign in your account</h3>
      <button onClick={handleSignIn}>sign in using Google</button>
    </Form>
  );
}

export default SignIn;
