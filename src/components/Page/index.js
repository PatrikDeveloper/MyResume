import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")``;

const ContentWrapper = styled("div")`
  max-width: 700px;
  margin: 30px auto;
  box-shadow: -1px -1px 7px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
`;

const Content = styled("div")``;

export default function Page(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Content>{props.children}</Content>
      </ContentWrapper>
    </Wrapper>
  );
}
