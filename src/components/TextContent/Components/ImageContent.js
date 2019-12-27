import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
  cursor: pointer;
  overflow: hidden;
  width: 100px;
  height: 50px;
  transition: .4s;  
`;

const Imagem = styled('img')`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  
`;

export default class ImageContent extends React.Component {
  render = () => {
    return(
      <Wrapper>
        <Imagem src={this.props.img} alt="" />   
      </Wrapper>
    );
  }
}