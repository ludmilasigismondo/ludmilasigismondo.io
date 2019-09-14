import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import { Helmet } from 'react-helmet';
// custom componentes
import { MainTitle, Section, Wrapper } from '../../components/ui';
// custom function
import { GalleryMappedFunction } from '../../utils';
// detail
import { onceUponATimeDetail, thisIsNotALoveStoryDetail } from '../../data/illustrations';

export class Illustrations extends Component {
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
          <title>Ludmila Sigismondo | Illustrations</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="robots" content="INDEX, FOLLOW" />
          <meta name="description" content="Ludmila Sigismondo watercolor illustrations drawings" />
          <meta name="country" content="UK" />
          <meta name="Keywords" content="artista - artist - drawings - draw - illustrations - watercolor - watercolor portraits - portraits - ludmila sigismondo - ludmila - sigismondo - painter - ludmilasigismondo" />
          <meta property="og:image" content="http://ludmilasigismondo.com/img/illustrations/1.jpg" />
          <meta property="og:title" content="Ludmila Sigismondo | Illustrations" />
          <meta property="og:site_name" content="ludmilasigismondo.com" />
          <meta property="og:url" content="http://ludmilasigismondo.com" />
          <meta property="og:description" content="Illustrations by Ludmila Sigismondo" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Ludmila Sigismondo | Illustrations" />
          <meta name="twitter:image:alt" content="Ludmila Sigismondo" />
        </Helmet>

        <Section>
          <MainTitle>
            <small>Illustrations</small>
            Once upon a time
          </MainTitle>
          <Masonry breakpointCols={ breakpointColumnsObj } className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            { onceUponATimeDetail.map(GalleryMappedFunction) }
          </Masonry>

          <MainTitle>This is not a love story</MainTitle>
          <Masonry breakpointCols={ breakpointColumnsObj } className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            { thisIsNotALoveStoryDetail.map(GalleryMappedFunction) }
          </Masonry>
        </Section>
      </Wrapper>
    )
  }
}