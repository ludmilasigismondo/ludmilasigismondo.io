import React from 'react';
import { NavLink } from 'react-router-dom';
import { MainImageWrapper, ImgWrapper, MainImage, MainImageText } from '../components/ui';

export const CategoryMappedFunction = ({ to, src, title }, i) => {
  return (
    <MainImageWrapper key={ i }>
      <ImgWrapper>
        <NavLink to={ to }>
          <MainImage src={ src } />
          <MainImageText>{ title }</MainImageText>
        </NavLink>
      </ImgWrapper>
    </MainImageWrapper>
  )
}