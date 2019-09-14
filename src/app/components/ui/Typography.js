import styled from 'styled-components';

export const MainTitle = styled.h2`
  font-family   : 'Playfair Display';
  font-size     : 34px;
  color         : #323232;
  margin-bottom : 40px;
  font-weight   : 700;

  & small {
    display        : block;
    color          : #999;
    font-size      : 70%;
    font-weight    : 400;
    letter-spacing : .4px;
  }
`;

export const SecondaryTitle = styled.h2`
  font-family : 'Playfair Display';
  color       : #323232;
  font-weight : 700;
  margin-top  : 50;
  text-align  : ${(props) => !!props.center ? 'center' : 'initial' }
`;

export const Paragraph = styled.p`
  font-size      : 16px;
  letter-spacing : .3px;
  margin-bottom  : 40px;
`;