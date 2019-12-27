import React from 'react';
import styled from 'styled-components';
import Header from '../Header';


const Wrapper = styled('div')`
  
`;

const ContentWrapper = styled('div')`
  max-width: 700px;
  margin: auto;
  box-shadow: -1px -1px 7px 0px rgba(0,0,0,0.50);
  border-radius: 10px;
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