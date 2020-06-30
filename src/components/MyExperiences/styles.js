import styled from "styled-components";

export const Wrapper = styled("div")``;

export const WrapperItem = styled.div`
  padding: 25px;
  border-top: 1px solid #ddd;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));

  @media (max-width: 320px) {
    padding: 20px 10px;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

export const label = styled.div`
  font-size: 14px;
  margin-right: 5px;
`;

export const WrapperTitle = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 65%;

  @media (max-width: 320px) {
    width: 50%;
  }
`;
export const WrapperDescription = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 30%;

  @media (max-width: 320px) {
    width: 50%;
  }
`;
