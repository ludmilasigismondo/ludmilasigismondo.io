import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
    font-weight    : 700;
    text-transform : uppercase;
    letter-spacing : 6px;
  }

  & h2 a {
    color: #222;
    transition: .3s !important;
  }

  & h2 a:hover {
    color: #000;
  }

  & h2 small {
    display        : block;
    color          : #999;
    font-weight    : 700;
    font-size      : 60%;
    transition     : .3s !important;
  }

  & h2 a:hover small {
    color: #777;
  }
`;

export const Header = () => {
  return(
    <HeaderWrapper>
      <h2>
        <NavLink to="/">
          Ludmila<br></br>Sigismondo <small>artist</small>
        </NavLink>
      </h2>
    </HeaderWrapper>
  )
}