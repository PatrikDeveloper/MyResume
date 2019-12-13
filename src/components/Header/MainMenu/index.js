import React from 'react';
import * as S from './styles';
import MainMenuItem from './components/MainMenuItem';

export default class MainMenu extends React.Component{
  render = () => {
    return (
      <S.Wrapper>
        <MainMenuItem label="Resumo"/>
        <MainMenuItem label="Projetos" />
        <MainMenuItem label="Formações" />
        <MainMenuItem label="Experiências" />
      </S.Wrapper>
    )  
  }
}