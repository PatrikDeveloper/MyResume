import styled from "styled-components";
import imageFile from "../../assets/img/header.jpg";
import image from "../../assets/img/patrik.jpeg";

export const Wrapper = styled("div")`
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 400px) {
    border-radius: 0;
  }
`;

export const ImageHeader = styled("div")`
  background-image: url('${imageFile}');
  background-repeat: no-repeat;
  width: 100%;
  height: 350px;


  @media (max-width: 320px) {
    background-position: 'center'
  }

`;

export const ThumbNail = styled("div")`
  width: 150px;
  height: 150px;
  border: 7px solid #fff;
  border-radius: 100%;
  overflow: hidden;
  top: 280px;
  position: absolute;

  @media (max-width: 320px) {
    width: 120px;
    height: 120px;
    top: 300px;
  }
`;

export const imageThumbNail = styled("div")`
  background-image: url('${image}');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const ProfileInfo = styled("div")`
  padding: 15px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.9)
  );

  @media (max-width: 320px) {
    padding: 10px;
  }
`;
