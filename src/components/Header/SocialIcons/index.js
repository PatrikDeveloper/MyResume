import React from 'react';
import * as S from './styles';
import GitHub from '../../../assets/img/github.png';
import Linkedin from '../../../assets/img/linkedin.png'
import ImageIcon from './components/ImageIcon';

export default class SocialIcon extends React.Component {
  render = () => {
    return (
      <S.Wrapper>
        <S.Icon >
          <a href="https://www.w3schools.com/html/">
            <ImageIcon img={GitHub} />
          </a>
        </S.Icon>
        <S.Icon >
          <a href="https://www.linkedin.com/in/patrikmatosf/">
            <ImageIcon img={Linkedin} />
          </a>        
        </S.Icon>
      </S.Wrapper>
    );
  }
}