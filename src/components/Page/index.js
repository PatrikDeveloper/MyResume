import React from 'react';
import styled from 'styled-components';
import Header from '../Header';


const Wrapper = styled('div')`
  
`;

const ContentWrapper = styled('div')`
  max-width: 700px;
  margin: auto;
`;

const Content = styled('div')`

`;

export default function Page(props) {
  return(
    <Wrapper>
      <ContentWrapper>
          <Header />

          <Content>
            {props.children}
          </Content>

      </ContentWrapper>
    </Wrapper>
  )
}