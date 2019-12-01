import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Masonry from 'react-masonry-css';
import { Helmet } from 'react-helmet';
// custom componentes
import {
  MainTitle,
  Paragraph,
  Section,
  Wrapper
} from '../../components/ui';
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
          <MainTitle>
            <small>Paintings</small>
            Pixel Art
          </MainTitle>

          <Row>
            <Col sm={{ span: 22 }} md={{ span: 20 }} lg={{ span: 18 }}>
              <Paragraph>
              What is a Pixel? The smallest homogeneous unit of colour making up a digital image.
              <br></br><br></br>
              When at University Pixels became an obsession of mine. It soon became my ambition to create
              a series of work that reproduced this pixelated effect using oil paints. I had to create this digital
              reality as a way of blurring the lines between photography and traditional painting styles.
              <br></br><br></br>
              At first glance pixels are nothing more than small units of matter, randomly dispersed over a
              canvas. They form images composed of three components: ink, value and saturation. This
              combination ultimately forms variations of colour which the eye then reconstructs, to form an
              image in its entirety. The only constant in this complex visual process is the perception of
              colour, which makes up the images which we all know and enjoy.
              <br></br><br></br>
              Through my art, what I aim to do is recreate the pixelated form; that which occurs before the
              brain has had time to process a final image.
              </Paragraph>
            </Col>
          </Row>

          <Masonry breakpointCols={ breakpointColumnsObj } className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            { pixelArtDetail.map(GalleryMappedFunction) }
          </Masonry>
        </Section>
      </Wrapper>
    )
  }
}