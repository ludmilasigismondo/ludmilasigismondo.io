import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import { Helmet } from 'react-helmet';
// custom componentes
import { MainTitle, Section, Wrapper } from '../../components/ui';
// custom function
import { GalleryMappedFunction } from '../../utils';
// detail
import { drawingsDetail } from '../../data/watercolorPortraits';

export class WatercolorPortraits extends Component {
  componentDidMount() {
    // document.body.classList.add('dark-theme');
  }

  componentWillUnmount() {
    // document.body.classList.remove('dark-theme');
  }

  render() {
    const breakpointColumnsObj = {
      default: 3,
      876: 2,
      659: 1
    };

    return (
      <Wrapper>
        <Helmet>
          <title>Ludmila Sigismondo | Drawings</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="robots" content="INDEX, FOLLOW" />
          <meta name="description" content="Ludmila Sigismondo watercolor portraits drawings" />
          <meta name="country" content="UK" />
          <meta name="Keywords" content="artista - artist - drawings - draw - watercolor - watercolor portraits - portraits - ludmila sigismondo - ludmila - sigismondo - painter - ludmilasigismondo" />
          <meta property="og:image" content="http://ludmilasigismondo.com/img/drawings/watercolor/1.jpg" />
          <meta property="og:title" content="Ludmila Sigismondo | Watercolor Portraits" />
          <meta property="og:site_name" content="ludmilasigismondo.com" />
          <meta property="og:url" content="http://ludmilasigismondo.com" />
          <meta property="og:description" content="Watercolor Portraits by Ludmila Sigismondo" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Ludmila Sigismondo | Watercolor Portraits" />
          <meta name="twitter:image:alt" content="Ludmila Sigismondo" />
        </Helmet>

        <Section>
          <MainTitle>
            <small>Drawings</small>
            Watercolor Portraits
          </MainTitle>

          <Masonry breakpointCols={ breakpointColumnsObj } className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            { drawingsDetail.map(GalleryMappedFunction) }
          </Masonry>    
        </Section>
      </Wrapper>
    )
  }
}