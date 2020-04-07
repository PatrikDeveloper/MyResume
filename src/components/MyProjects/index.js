import React from "react";
import * as S from "./styles";

const projects = [
  {
    id: 1,
    title: "Alagym",
    link: "https://github.com/patrikdev/alagym-react-native-1.0",
    text:
      "React Native UX para academias. Criado para melhorar a experiência dos usuários de uma academia de ginástica e musculação",
  },
  {
    id: 2,
    title: "Uarini.com",
    link: "https://github.com/patrikdev/uarini.com",
    text:
      "React JS UX. Criado um projeto voltado para importação e  exportação de produtos da região norte.",
  },
];

export default function MyProjects() {
  return (
    <S.Wrapper>
      {projects.map((item) => {
        return (
          <S.WrapperText>
            <S.WrapperLogo>
              <S.Title>{item.title}</S.Title>
            </S.WrapperLogo>
            <S.WrapperDescription>
              <S.label>{item.text}</S.label>
            </S.WrapperDescription>
          </S.WrapperText>
        );
      })}
    </S.Wrapper>
  );
}
