import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import BoxContent from '../BoxContent';

const Wrapper = styled('div')`
  
`;

const Content = styled('div')`
  max-width: 700px;
  margin: auto;
`;

export default function Page() {
  return(
    <Wrapper>
      <Content>
          <Header />
          <BoxContent />
      </Content>
    </Wrapper>
  )
}