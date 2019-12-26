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
                    <li>
                      <a href="https://www.am.senac.br/">SENAC - AM: </a>
                      Técnico Em Informática Para Internet.
                    </li>
                    <li>
                      <a href="https://www.am.senac.br/">SENAC - AM: </a>
                      Instalador e Reparador de Redes de Computadores.
                    </li>
                    <li>
                      <a href="https://www.am.senac.br/">SENAC - AM: </a>
                      Montagem e Manutenção de Computadores.
                    </li>
                    <li>
                      <a href="http://www.am.senai.br/">SENAI - AM: </a>
                      Web Designer.
                    </li>
                    <li>
                      <a href="http://www.cetam.am.gov.br/">CETAM - AM: </a>
                      Informática Básica.                    
                    </li>
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
