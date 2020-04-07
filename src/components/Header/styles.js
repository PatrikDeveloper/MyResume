import styled from "styled-components";
import imageFile from "../../assets/img/header.jpg";
import image from "../../assets/img/patrik.png";

export const Wrapper = styled("div")`
  border-radius: 10px;
  overflow: hidden;
  padding: 0 0 20px;
`;

export const ImageHeader = styled("div")`
  background-image: url('${imageFile}');
  background-repeat: no-repeat;
  width: 100%;
  height: 350px;
`;

export const ThumbNail = styled("div")`
  width: 150px;
  height: 150px;
  border: 7px solid #fff;
  border-radius: 100%;
  overflow: hidden;
  top: 280px;
  position: absolute;
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
`;
