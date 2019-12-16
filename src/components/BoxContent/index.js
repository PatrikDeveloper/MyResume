import React from 'react';
import * as S from './styles';

export default class BoxContent extends React.Component{
  render = () => {
    return (
      <S.Wrapper>
        <S.ContentBox>
          <S.Title><h3>Bem-vindo ao meu portfólio !</h3></S.Title>
          <S.Content>Fico feliz que você esteja aqui, mas este ainda é um trabalho em andamento. Se você quiser falar comigo, envie-me um e-mail.</S.Content>
        </S.ContentBox>
        <S.ContentBox>
          <S.Title>
            <h3>Em Desenvolvimento...</h3>
          </S.Title>
          <S.Content>Em Desenvolvimento...</S.Content>
        </S.ContentBox>
      </S.Wrapper>
    );
  }
}