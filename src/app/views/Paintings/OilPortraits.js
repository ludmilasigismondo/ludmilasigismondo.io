import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import { Helmet } from 'react-helmet';
// custom componentes
import { MainTitle, Section, Wrapper } from '../../components/ui';
// custom function
import { GalleryMappedFunction } from '../../utils';
// detail
import { paintingsDetail } from '../../data/oilPortraits';

export class OilPortraits extends Component {
  componentDidMount () {
    // document.body.style.background = 'red';
  }

  render() {
    const breakpointColumnsObj = {
      default: 2,
      659: 1
    };

    return (
      <Wrapper>
        <Helmet>
          <title>Ludmila Sigismondo | Paintings: Oil Portraits</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="robots" content="INDEX, FOLLOW" />
          <meta name="description" content="Ludmila Sigismondo's oil paintings portraits" />
          <meta name="country" content="UK" />
          <meta name="Keywords" content="artista - artist - pintura oleo - oil painting - paintings - pinturas - ludmila sigismondo - ludmila - sigismondo - painter - ludmilasigismondo" />
          <meta property="og:image" content="http://ludmilasigismondo.com/img/paintings/1.jpg" />
          <meta property="og:title" content="Ludmila Sigismondo | Portraits" />
          <meta property="og:site_name" content="ludmilasigismondo.com" />
          <meta property="og:url" content="http://ludmilasigismondo.com" />
          <meta property="og:description" content="Oil Portrats by Ludmila Sigismondo" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Ludmila Sigismondo | Oil Portraits" />
          <meta name="twitter:image:alt" content="Ludmila Sigismondo" />
        </Helmet>

        <Section>
          <MainTitle>
            <small>Paintings</small>
            Oil Portraits
          </MainTitle>

          <Masonry breakpointCols={ breakpointColumnsObj } className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            { paintingsDetail.map(GalleryMappedFunction) }
          </Masonry>
        </Section>
      </Wrapper>
    )
  }
}