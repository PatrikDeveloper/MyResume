import React from "react";
import * as S from "./styles";

const projects = [
  {
    id: 1,
    title: "My Portfolio",
    link: "https://patrikdev.github.io/my-portfolio/",
    text:
      "Similar á este projeto, mas focado em dar um overview sobre todas as tecnologias e projetos em destaque que eu desenvolvi até agora. Estou preparado e motivado para começar a trabalhar. Usei as tecnologias React, HTML5, CSS3 e versionamento Git. Completamente responsivo.",
  },
  {
    id: 2,
    title: "Alagym React Native UX",
    link: "https://github.com/patrikdev/alagym-react-native-1.0",
    text:
      "Criado para melhorar a experiência dos usuários de uma academia de ginástica e musculação.",
  },
  {
    id: 3,
    title: "Uarini.com",
    link: "https://github.com/patrikdev/uarini.com",
    text:
      "React JS UX. Criado um projeto voltado para importação e  exportação de produtos da região norte.",
  },
  {
    id: 4,
    title: "Contador React",
    link: "https://patrikdev.github.io/contador-react/",
    text:
      "Um projeto voltado para treinamento com React Hooks, utilizando styled-components.",
  },
];

export default function MyProjects() {
  return (
    <S.Wrapper>
      {projects.map((item) => {
        return (
          <S.WrapperItem key={item.id} onClick={() => console.log("testando")}>
            <S.WrapperTitle>
              <S.Title>{item.title}</S.Title>
              <S.Link target="_blank" href={item.link}>
                Acessar Projeto
              </S.Link>
            </S.WrapperTitle>
            <S.WrapperDescription>
              <S.label>{item.text}</S.label>
            </S.WrapperDescription>
          </S.WrapperItem>
        );
      })}
    </S.Wrapper>
  );
}
