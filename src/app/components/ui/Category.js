import styled from 'styled-components';

export const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: block;

  @media (min-width: 768px) {
    width: 50%;
    display: inline-block;
    margin-bottom: -5px;
  }
`

export const ImgWrapper = styled.div`
  width: 100%;

  &:hover img {
    opacity: 0;
  }
`

export const MainImage = styled.img`
  width: 100%;
  background: #222;
  /* box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1); */
  display: block;
  transition: .3s;
`

export const MainImageText = styled.span`
  z-index: -1;
  color: #222;
  position: absolute;
  font-family: "Playfair Display";
  bottom: 20%;
  right: 15%;
  font-size: 32px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`