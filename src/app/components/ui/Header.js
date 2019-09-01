import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.section`
  padding          : 40px 10px;
  background-color : #fafafa;
  border-bottom    : 1px solid rgba(0, 0, 0, .02);
  margin-top       : -5px;

  & h2 {
    margin         : 0 0 5px 0;
    font-size      : 32px;
    text-align     : center;
    font-family    : 'Playfair Display';
    color          : #222;
    font-weight    : 700;
    text-transform : uppercase;
    letter-spacing : 6px;
  }

  & h2 small {
    display        : block;
    color          : #999;
    font-weight    : 700;
    font-size      : 60%;
  }
`;

export const Header = () =>
  <HeaderWrapper>
    <h2>Ludmila<br></br>Sigismondo <small>artist</small></h2>
  </HeaderWrapper>

