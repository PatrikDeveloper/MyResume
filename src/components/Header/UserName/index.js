import React from 'react';
import * as S from './styles';

export default class UserName extends React.Component{
  render = () => {
    return (
      <S.Wrapper>
        <S.UserName>
          <h1>Patrik Feitosa Matos</h1>
        </S.UserName>
        <S.Description>
          Developer Front End Junior
        </S.Description>
      </S.Wrapper>   
      
    );
  }
}