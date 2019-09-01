import styled from 'styled-components';

export const MainTitle = styled.h2`
  font-family   : 'Playfair Display';
  font-size     : 28px;
  color         : #323232;
  margin-bottom : 40px;
  font-weight   : 700;

  .dark-theme & {
    color: #f0f0f0;
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

  .dark-theme & {
    color: #f0f0f0;
  }
`;