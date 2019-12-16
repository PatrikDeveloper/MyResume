import styled from 'styled-components';

export const Wrapper = styled('div')`
  border-bottom: 2px solid #3CB371;
  padding: 15px 50px;
  transition: .3s;
  font-weight: bold;
  font-size: 16px;
  color: white;
  margin: auto;
  
  &:hover {
    cursor: pointer;
    background-color: #2E8B57;
    border-bottom: 2px solid white;
  }
`;

