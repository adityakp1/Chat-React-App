import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
    @media screen and (min-width: 320px) and (max-width: 500px) {
          height: 6rem;
        }
  }
  
  span {
    color: #4e0eff;
  }

  h1{
    @media screen and (min-width: 320px) and (max-width: 500px) {
          font-size: .4rem;
        }
  }

  h3{
    margin-top: .5rem;
    @media screen and (min-width: 320px) and (max-width: 500px) {
          font-size: .3rem;
        }
  }
`;
