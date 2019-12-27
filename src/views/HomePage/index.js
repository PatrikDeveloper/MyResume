import React from 'react';
import Page from '../../components/Page';
import * as S from './styles';
import Accordion from '../../components/Accordion';
import TextContent from '../../components/TextContent';

export default class HomePage extends React.Component {
  render(){
    return(
      <Page>
        <S.Wrapper>
          <Accordion
            title="Resumo"
          >
            <S.ContentBox>
              <S.Title><h3>Bem-vindo ao meu portfólio!</h3></S.Title>
              <S.Content>
                <S.TextContent>Fico feliz que você esteja aqui, mas este ainda é um trabalho em       andamento. Se você quiser falar comigo, envie-me um e-mail:
                 patrikmatos.tecinfo@gmail.com                
                </S.TextContent>
              </S.Content>
            </S.ContentBox>    
          </Accordion>
        
          <Accordion
            title="Projetos"
          >
            <S.ContentBox>
              <S.Title>
                <h3>Em Desenvolvimento...</h3>
              </S.Title>
              <S.Content>
                <S.TextContent>Em Desenvolvimento...</S.TextContent>
              </S.Content>
            </S.ContentBox>
          </Accordion>

          <Accordion
            title="Experiência"
          >
            <S.ContentBox>
              <S.Title>
                Em Desenvolvimento...
              </S.Title>
              <S.Content>
                <S.TextContent>Em Desenvolvimento...</S.TextContent>
                </S.Content>
            </S.ContentBox>
          </Accordion>

          <Accordion
            title="Informações"
          >
            <S.ContentBox>
              <S.Title>
                Cursos
              </S.Title>
              <S.Content>
                
                <TextContent />
              </S.Content>
            </S.ContentBox>
          </Accordion>
        </S.Wrapper>
      </Page>
    )
  }
}
