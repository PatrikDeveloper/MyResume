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
            <h3>The REST API is unavailable right now.</h3>
          </S.Title>
          <S.Content>This list comes from a microservice that is still under development, it's called node-blog-api. It's a NodeJS REST API that returns posts as JSON.</S.Content>
        </S.ContentBox>
      </S.Wrapper>
    );
  }
}