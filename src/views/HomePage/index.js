import React from "react";
import Page from "../../components/Page";
import * as S from "./styles";
import Title from "../../components/Title";
import Header from "../../components/Header";
import MyResume from "../../components/MyResume/index";
import MyProjects from "../../components/MyProjects/index";
import MyExperiences from "../../components/MyExperiences";

export default function HomePage() {
  return (
    <Page>
      <S.Wrapper>
        <Header />
        <Title title="Objetivo" />
        <MyResume />

        <Title title="Experiências" />
        <MyExperiences />

        <Title title="Projetos Pessoais" />
        <MyProjects />
      </S.Wrapper>
    </Page>
  );
}
