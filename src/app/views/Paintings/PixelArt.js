import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import { Helmet } from 'react-helmet';
// custom componentes
import { MainTitle, Section, Wrapper, Paragraph } from '../../components/ui';
// custom function
import { GalleryMappedFunction } from '../../utils';
// detail
import { pixelArtDetail } from '../../data/pixelArt';

export class PixelArt extends Component {
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
          <title>Ludmila Sigismondo | Paintings: Pixel Art</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="robots" content="INDEX, FOLLOW" />
          <meta name="description" content="Ludmila Sigismondo Pixel Arts paintings (oil)" />
          <meta name="country" content="UK" />
          <meta name="Keywords" content="artista - artist - pintura oleo - oil painting - paintings - pinturas - pixel - pixel art - ludmila sigismondo - ludmila - sigismondo - painter - ludmilasigismondo" />
          <meta property="og:image" content="http://ludmilasigismondo.com/img/paintings/pixel-art/1.jpg" />
          <meta property="og:title" content="Ludmila Sigismondo | Pixel Art" />
          <meta property="og:site_name" content="ludmilasigismondo.com" />
          <meta property="og:url" content="http://ludmilasigismondo.com" />
          <meta property="og:description" content="Pixel art by Ludmila Sigismondo" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Ludmila Sigismondo | Pixel Art" />
          <meta name="twitter:image:alt" content="Ludmila Sigismondo" />
        </Helmet>

        <Section>
          <MainTitle>Paintings<br></br>Pixel Art</MainTitle>

          <Paragraph>
            Pixel<br></br>
            or<br></br>
            Pixels...<br></br>
            A Pixel is the smallest homogeneous unit of color of a digital image.<br></br>
            I’ve been obsessed trying to reproduce pixelated images with pigments for months. This
            ambition led me to paint compulsively...<br></br>
            At first, it seemed that small units of matter were graciously scattered around through the
            canvas. This resulted in an endless colour variable. In the end, what I see is an image
            composed of infinite combinations of hue, value and saturation...<br></br>
            The eye reconstructs that which vanishes... but we are no longer able to see the image as
            a whole.<br></br>
            In the long run, only colour remains...
          </Paragraph>

          <Masonry breakpointCols={ breakpointColumnsObj } className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            { pixelArtDetail.map(GalleryMappedFunction) }
          </Masonry>
        </Section>
      </Wrapper>
    )
  }
}