import React from 'react';
import * as S from './styles';
import ImageContent from './Components/ImageContent';
import Senac from '../../assets/img/senac.png';


export default class TextContent extends React.Component{
  render(){
    return(
      <S.Wrapper>
        <S.Icon>
          <a href="http://am.senac.br">
            <ImageContent img={Senac} />  
          </a>
          <S.textIcon>Técnico em Informática Para Internet</S.textIcon>  
        </S.Icon>
        <S.Icon>
          <a href="http://am.senac.br">
            <ImageContent img={Senac} />  
          </a>
          <S.textIcon>Redes de Computadores</S.textIcon>  
        </S.Icon>
        <S.Icon>
          <a href="http://am.senac.br">
            <ImageContent img={Senac} />  
          </a>
          <S.textIcon>Montador e Reparador de Computadores</S.textIcon>  
        </S.Icon>
      </S.Wrapper>
    );
  }
}