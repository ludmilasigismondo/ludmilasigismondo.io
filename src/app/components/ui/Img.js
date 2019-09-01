import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImgWrapper = styled.div`
  background-color : #fafafa;
`;

const Img = styled.img`
  width            : 100%;
  background-color : #fafafa;
`;

const Gallery = styled.img`
  display          : block;
  margin           : 0 auto;
  max-width        : 100%;
  
  background-color : #fafafa;
  box-shadow       : 0 4px 5px 0 rgba(0, 0, 0, .14),
                     0 1px 10px 0 rgba(0, 0, 0, .12),
                     0 2px 4px -1px rgba(0, 0, 0, .3);
`;

const PreviewImgStyled = styled.div`
  margin   : 10px;
  overflow : hidden;
  position : relative;

  & img {
    background : #222;
    opacity    : .9;
    transition : transform .5s ease;
  }

  &:hover img {
    opacity   : .7;
    transform : scale(1.03);
  }

  & span {
    display     : block;
    font-family : 'Playfair Display';
    position    : absolute;
    color       : #282828;
    width       : 100%;
    font-size   : 24px;
    font-weight : 700;
    bottom      : 10px;
    left        : 15px;
  }
`;

const Detail = styled.div`
  text-align : center;
  margin     : 10px 0 60px;

  .dark-theme & {
    color: #f0f0f0 !important;
  }
`;

const TitlePaint = styled.span`
  font-weight : 700;
  font-style  : italic;
`;

const BlockText = styled.span`
  display: block;
`;

export const GalleryItem = (props) => {
  const {
    src,
    title    = null,
    year     = null,
    type     = null,
    messures = null
  } = props;

  if (!!title) {
    return (
      <div>
        <Gallery src={ src } />
        <Detail>
          <TitlePaint>{ title }</TitlePaint> ({ year })
          <BlockText>{ type }</BlockText>
          <BlockText>{ messures }</BlockText>
        </Detail>
      </div>
    )
  }

  return (
    <ImgWrapper>
      <Img src={ src }></Img>
    </ImgWrapper>
  )
};

export const PreviewImg = (props) => {
  const { url, src, title } = props
  
  return (
    <PreviewImgStyled>
      <Link to={ url }>
        <Img className="pG" src={ src }></Img>
        <span>{ title }</span>
      </Link> 
    </PreviewImgStyled>
  )
};