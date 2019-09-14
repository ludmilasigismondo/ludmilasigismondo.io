import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
// custom function
import { CategoryMappedFunction } from '../../utils';

const previewData = [
  {
    to    : '/drawings',
    src   : '/img/home/oilportraits.jpg',
    title : 'Oil Portraits'
  }, {
    to    : '/drawings',
    src   : '/img/home/pixelart.jpg',
    title : 'Pixel Art'
  }, {
    to    : '/drawings',
    src   : '/img/home/illustrations.jpg',
    title : 'Illustrations'
  }, {
    to    : '/drawings',
    src   : '/img/home/drawings.jpg',
    title : 'Drawings'
  }
];

const HomeWrapper = styled.div`
  margin-top: 2px;
`

export const Home = () => 
  <div>
    <Helmet>
      <title>Ludmila Sigismondo</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="robots" content="INDEX, FOLLOW" />
      <meta name="description" content="Ludmila Sigismondo Artist based in UK: Paintings, Oil, Ink, Watercolor, Drawings, Sketches, Portraits" />
      <meta name="country" content="UK" />
      <meta name="Keywords" content="artista - artist - pintura oleo - oil painting - ink-  watercolor - acuarela - portraits - oil - retratos nocturnos - pixel art - ludmila - sigismondo -ludmila sigismondo - ludmilasigismondo - painter" />
      <meta property="og:image" content="http://ludmilasigismondo.com/img/ludmila.jpg" />
      <meta property="og:title" content="Ludmila Sigismondo | Artist" />
      <meta property="og:site_name" content="ludmilasigismondo.com" />
      <meta property="og:url" content="http://ludmilasigismondo.com" />
      <meta property="og:description" content="Ludmila Sigismondo artist based in UK." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Ludmila Sigismondo | Artist" />
      <meta name="twitter:image:alt" content="Ludmila Sigismondo" />
    </Helmet>

    <HomeWrapper>
      { previewData.map(CategoryMappedFunction) }
    </HomeWrapper>
  </div>