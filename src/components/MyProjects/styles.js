import styled from "styled-components";

export const Wrapper = styled("div")`
  overflow: hidden;
`;

export const WrapperItem = styled.div`
  padding: 30px 20px;
  border-top: 1px solid #ddd;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));
  z-index: 1;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Link = styled.a`
  color: #36b;
  font-size: 14px;
  font-weight: normal;
  transition: 0.3s;

  &:hover,
  &:focus {
    padding-left: 5px;
    color: #47c;
  }
`;

export const label = styled.div`
  font-size: 14px;
`;

const titleWidth = 35;

export const WrapperTitle = styled.div`
  display: inline-block;
  vertical-align: top;
  width: ${titleWidth}%;
  line-height: 1.6em;
`;
export const WrapperDescription = styled.div`
  display: inline-block;
  vertical-align: top;
  width: ${100 - 1 - titleWidth}%;
  padding: 0 15px;
`;
