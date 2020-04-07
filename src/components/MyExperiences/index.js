import React from "react";
import * as S from "./styles";

const experiences = [
  {
    id: 1,
    title: "Action Telecom Serviços de Multimidia Ltda",
    text: "Analista de Suporte Junior",
    year: 2019,
  },
  {
    id: 2,
    title: "Amazonett Serviços de Informática Ltda",
    text: "Auxiliar Técnico",
    year: 2017,
  },
  {
    id: 3,
    title: "M.N Serviços de Informática Ltda",
    text: "Auxiliar Técnico",
    year: 2016,
  },
];

export default function MyExperiences() {
  return (
    <S.Wrapper>
      {experiences.map((item) => {
        return (
          <S.WrapperText>
            <S.WrapperLogo>
              <S.Title>{item.title}</S.Title>
            </S.WrapperLogo>
            <S.WrapperDescription>
              <S.label>{item.text}</S.label>
              <br />
              <S.label>Ano de Atuação: {item.year}</S.label>
            </S.WrapperDescription>
          </S.WrapperText>
        );
      })}
    </S.Wrapper>
  );
}
