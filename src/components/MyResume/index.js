import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
`;

const Label = styled.div`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export default function MyResume(props) {
  return (
    <Wrapper>
      <Label>
        <li>Primeiro emprego como programador</li> <br />
        <li>Desenvolver atividades com React e React Native</li>
      </Label>
    </Wrapper>
  );
}
