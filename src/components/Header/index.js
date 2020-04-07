import React from "react";
import * as S from "./styles";
import SocialIcons from "./SocialIcons";
import UserName from "./UserName";

export default function Header() {
  return (
    <S.Wrapper className="Header">
      <S.ImageHeader />
      <S.ProfileInfo>
        <S.ThumbNail className="Thumbnail">
          <S.imageThumbNail />
        </S.ThumbNail>
        <SocialIcons />
        <UserName />
      </S.ProfileInfo>
    </S.Wrapper>
  );
}
