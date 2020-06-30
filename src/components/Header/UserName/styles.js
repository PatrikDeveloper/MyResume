import styled from "styled-components";

export const Wrapper = styled("div")`
  margin: 45px 0 10px;

  @media (max-width: 400px) {
    margin: 60px 0 20px;
  }
`;

export const UserName = styled("div")`
  font-size: 16px;
  margin: 0 30px 15px 30px;
  color: #666;
  font-weight: bold;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const Description = styled("div")`
  margin: 0 30px 0 30px;
  font-size: 14px;
  line-height: 1.4em;

  @media (max-width: 400px) {
    text-align: justify;
    margin: 30px 10px;
  }
`;
