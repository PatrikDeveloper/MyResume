import React from 'react';
import styled from 'styled-components';

const Imagem = styled('img')`
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: .4s;

  &:hover{
    transform: scale(1.1);  
  }
  
`;

export default class ImageIcon extends React.Component {
  render = () => {
    return(
      <Imagem src={this.props.img} alt="" />   
    );
  }
}