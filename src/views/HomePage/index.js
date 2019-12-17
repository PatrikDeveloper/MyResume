import React from 'react';
import Page from '../../components/Page';
import * as S from './styles';
import Accordion from '../../components/Accordion';

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
              <S.Content>Fico feliz que você esteja aqui, mas este ainda é um trabalho em andamento. Se você quiser falar comigo, envie-me um e-mail.</S.Content>
            </S.ContentBox>    
          </Accordion>
        
          <Accordion
            title="Projetos"
          >
            <S.ContentBox>
              <S.Title>
                <h3>Em Desenvolvimento...</h3>
              </S.Title>
              <S.Content>Em Desenvolvimento...</S.Content>
            </S.ContentBox>
          </Accordion>

          <Accordion
            title="Experiência"
          >
            <S.ContentBox>
              <S.Title>
                Em Desenvolvimento...
              </S.Title>
              <S.Content>Em Desenvolvimento...</S.Content>
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
                <h3>
                  <ul>
                    <li>SENAC - AM: Técnico Em Informática Para Internet.</li>
                    <li>SENAC - AM: Instalador e Reparador de Redes de Computadores.</li>
                    <li>SENAC - AM: Montagem e Manutenção de Computadores.</li>
                    <li>SENAI - AM: Web Designer.</li>
                    <li>CETAM - AM: Informática Básica.</li>
                  </ul>
                </h3>
              </S.Content>
            </S.ContentBox>
          </Accordion>
        </S.Wrapper>
      </Page>
    )
  }
}
