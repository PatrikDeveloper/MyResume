import React from "react";
import * as S from "./styles";

const experiences = [
  {
    id: 1,
    title: "Action Telecom Serviços de Multimidia Ltda",
    text: "Analista de Suporte Junior",
    dateInitial: "02/01/2019",
    dateEnd: "20/08/2019",
  },
  {
    id: 2,
    title: "Amazonett Serviços de Informática Ltda",
    text: "Auxiliar Técnico",
    dateInitial: "01/02/2017",
    dateEnd: "08/11/2017",
  },
  {
    id: 3,
    title: "Regina Célia Nascimento ME",
    text: "Auxiliar Técnico",
    dateInitial: "18/04/2016",
    dateEnd: "16/01/2017",
  },
];

export default function MyExperiences() {
  return (
    <S.Wrapper>
      {experiences.map((item) => {
        return (
          <S.WrapperItem
            key={item.id}
            onClick={() => console.log("funcionando")}
          >
            <S.WrapperTitle>
              <S.Title>{item.title}</S.Title>
            </S.WrapperTitle>
            <S.WrapperDescription>
              <S.label>{item.text}</S.label>
              <S.label>De: {item.dateInitial}</S.label>
              <S.label>Até: {item.dateEnd}</S.label>
            </S.WrapperDescription>
          </S.WrapperItem>
        );
      })}
    </S.Wrapper>
  );
}
