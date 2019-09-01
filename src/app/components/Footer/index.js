import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';

const footerData = [{
  url  : 'mailto:ludmilasigismondo@gmail.com?Subject=Web%20contact',
  icon : 'mail'
}, {
  url  : 'https://www.instagram.com/ludmilasigismondo/',
  icon : 'instagram'
}, {
  url  : 'https://www.facebook.com/Ludmila-Sigismondo-1895859847326725/',
  icon : 'facebook'
}];

const FooterWrapper = styled.div`
  background-color: #efefef;
  padding: 80px 10px 60px;

  .dark-theme & {
    background-color: #222;
  }
`
const Title = styled.h2`
  text-align: center;
  font-family: 'Playfair Display';
  font-weight: 700;
  margin: 0;

  & small {
    display        : block;
    color          : #999;
    font-weight    : 700;
    text-transform : uppercase;
    letter-spacing : 6px;
  }

  .dark-theme & {
    color: #f0f0f0;
  }

  .dark-theme & small {
    color: #aaa;
  }
`
const Social = styled.div`
  padding: 20px;
  text-align: center;

  & a {
    color: #555;
    margin: 0 10px;
  }

  & a i {
    font-size: 24px;
  }

  .dark-theme & a i {
    color: #f0f0f0;
  }
`
const InnerFooter = styled.div`
  background-color: #222;
  padding: 10px;

  & span {
    font-weight: 700;
    color: #fff;
    display: block;
    text-align: center;
    letter-spacing: -.3px;
    font-size: 12px;
  }

  .dark-theme & {
    background-color: #111;
  }
`

const SocialItem = ({ url, icon }) => {
  return (
    <a rel="noopener noreferrer" href={ url } target="_blank">
      <Icon type={ icon } />
    </a>
  )
}


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <FooterWrapper>
        <Title>
          Ludmila Sigismondo
          <small>artist</small>
        </Title>

        <Social>
          {
            footerData.map(({ url, icon }, i) => {
              return <SocialItem key={ i } url={ url } icon={ icon } />
            })
          }
        </Social>
      </FooterWrapper>

      <InnerFooter>
        <span>Ludmila Sigismondo © { year }</span>
      </InnerFooter>
    </footer>
  )
}

export default Footer;