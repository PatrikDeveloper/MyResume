import React from "react";
import * as S from "./styles";

export default function UserName() {
  return (
    <S.Wrapper>
      <S.UserName>
        <h1>Patrik Feitosa Matos</h1>
      </S.UserName>
      <S.Description>
        Seja bem-vindo ao meu portifólio. Tenho 22 anos, estudo programação há 2
        anos, desenvolvo aplicações com React, React Native e APIs em Node.
        Atualmente meu foco está em me tornar um bom programador front-end
        criando aplicativos com React Native.
      </S.Description>
    </S.Wrapper>
  );
}
