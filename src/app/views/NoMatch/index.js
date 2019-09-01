import React from 'react';
import styled from 'styled-components';
// custom componentes
import { Wrapper, Section } from '../../components/ui';

const Title = styled.h2`
  font-size     : 40px;
  text-align    : center;
  font-weight   : bold;
  margin-bottom : 0;
`;

const Subtitle = styled.h3`
  font-size  : 20px;
  text-align : center;

  & code {
    color: #999
  }
`;

export const NoMatch = ({ location }) => {
  return(
    <Wrapper>
      <Section>
        <Title>404 Error</Title>
        <Subtitle>Page not found: <code>{ location.pathname }</code></Subtitle>
      </Section>
    </Wrapper>
  )
};