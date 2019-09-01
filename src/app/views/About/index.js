import React, { Component } from 'react';
import { Carousel, Row, Col, Icon } from 'antd';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
// custom componentes
import {
  GalleryItem,
  MainTitle,
  SecondaryTitle,
  Wrapper,
  Paragraph,
  Section
} from '../../components/ui';

const exhibitionData = [
  {
    t: 'Nocturnal Portraits.',
    d: '(First solo exhibition) Facultad Nacional de Rosario. (Rosario’s National University). Argentina.',
    y: '2016'
  }, {
    t: 'II Salón Provincial de Pintura 75º Aniversario.',
    d: 'Group exhibition. Casa Arijón espacio cultural de Saladillo. (House Arijón cultural space of Saladillo) Argentina.',
    y: '2016'
  }, {
    t: 'Acercamientos obsesivos al fragmento.',
    d: 'Group exhibition. Facultad Nacional de Rosario. (Rosario’s National University). Argentina.',
    y: '2013'
  }, {
    t: 'No te va a combinar con el sillón.',
    d: 'Group exhibition. La Toma Gallery. Argentina.',
    y: '2012'
  }, {
    t: 'Exposición de Arte de alumnos de la Facultad de Bellas Artes y la Escuela Provincial de Artes Visuales de Rosario.',
    d: 'Group exhibition Gallery Casa del Artista Plástico. Argentina.',
    y: '2011'
  }, {
    t: 'Nacido de un árbol.',
    d: 'Art intervention with María José Terán, Belén Rimini and Sabina Dragichevich. Ferroviario Museum that take part of Art week in Funes. Argentina.',
    y: '2011'
  }, {
    t: 'Paratextos.',
    d: '(ciclo MOSTRARTE) Group exhibition. Facultad de Arquitectura, Planeamiento y Diseño. Argentina.',
    y: '2010'
  }, {
    t: 'Mamushkas para Julián.',
    d: 'Group exhibition. Centro "Antonio Berni". Argentina.',
    y: '2008'
  }
]

const educationData = [
  {
    d: 'Degree in Fine Arts Facultad Nacional de Rosario',
    y: '2008 - 2016'
  }, {
    d: 'Course in Digital Design at FAGDUT (U.T.N) Institute (Photoshop, Illustrator, Dreamwear, 3Dmax)',
    y: '2014 - 2015'
  }, {
    d: 'Hyperrealism Painting workshop with Gabriel Schiavina.',
    y: '2014'
  }, {
    d: 'Painting with Paula Grazzini.',
    y: '2014'
  }, {
    d: 'Human body drawing workshop with sculptor Sandro Alzugaray.',
    y: '2016'
  }, {
    d: 'Painting workshop with Juan Balaguer',
    y: '2016'
  }, {
    d: 'Drawing workshop with Julián Usandizaga',
    y: '2008'
  }, {
    d: 'Drawing and painting workshop with Lucas Marelli',
    y: '2006'
  }
]

const CarouselWrapper = styled.div`
  position      : relative;
  margin-bottom : 50px;
`;
const ButtonCarousel  = styled.button`
  z-index            : 1;
  border             : 0;
  cursor             : pointer;
  position           : absolute;
  top                : 50%;
  outline            : none;
  color              : #eee !important;
  font-size          : 20px;
  line-height        : 40px;
  margin-top         : -30px;
  background-color   : rgba(0, 0, 0, 0.45);
  display            : inline-block;
  padding            : 20px 15px;
  -webkit-transition : all 200ms cubic-bezier(.25, .46, .45, .94);
  transition         : all 200ms cubic-bezier(.25, .46, .45, .94);
  right              : ${ (props) => !!props.right ? 0 : 'initial' };
  left               : ${ (props) => !!props.left ? 0 : 'initial' };

  :hover {
    background-color: rgba(0, 0, 0, 0.65);
  }
`;

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.next     = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  };

  next() {
    this.carousel.next();
  };

  previous() {
    this.carousel.prev();
  };

  render() {
    const props = {
      dots           : false,
      slidesToShow   : 1,
      slidesToScroll : 1,
      effect         : 'fade'
    };

    return(
      <CarouselWrapper>
        <ButtonCarousel left onClick={ this.previous }>
          <Icon type="caret-left" />
        </ButtonCarousel>

        <ButtonCarousel right onClick={ this.next }>
          <Icon type="caret-right" />
        </ButtonCarousel>

        <Carousel ref={ node => (this.carousel = node) } { ...props }>
          <GalleryItem src="/img/slider/slide1.png" />
          <GalleryItem src="/img/slider/slide2.png" />
          <GalleryItem src="/img/slider/slide3.png" />
          <GalleryItem src="/img/slider/slide4.png" />
          <GalleryItem src="/img/slider/slide5.png" />
          <GalleryItem src="/img/slider/slide6.png" />
        </Carousel>
      </CarouselWrapper>
    )
  };
};

const BasicInfoStyled = styled.p`
  font-size: 16px;
  letter-spacing: .3px;

  & i {
    display: block;
    color: #040404;
  }

  & b {
    display: block;
    color: #ef5350;
    font-size: 12px;
  }
`;

const BasicInfo = ({t, d, y}, i) => {
  let title = !!t ? <i>{ t }</i> : ''

  return (
    <BasicInfoStyled key={ i }>
      { title } { d } <b>{ y }</b>
    </BasicInfoStyled>
  )
}

export class About extends Component {
  render() {
    return(
      <Wrapper>
        <Helmet>
          <title>Ludmila Sigismondo | About Me</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="robots" content="INDEX, FOLLOW" />
          <meta name="description" content="Ludmila Sigismondo full biography, artist based in UK" />
          <meta name="country" content="UK" />
          <meta name="Keywords" content="artista - artist - drawings - paintings - ludmila sigismondo - ludmila - sigismondo - painter - fine arts - ludmilasigismondo" />
          <meta property="og:image" content="http://ludmilasigismondo.com/img/ludmila.jpg" />
          <meta property="og:title" content="Ludmila Sigismondo | About Me" />
          <meta property="og:site_name" content="ludmilasigismondo.com" />
          <meta property="og:url" content="http://ludmilasigismondo.com" />
          <meta property="og:description" content="Personal biography" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Ludmila Sigismondo | About Me" />
          <meta name="twitter:image:alt" content="Ludmila Sigismondo" />
        </Helmet>

        <Section>
          <MainTitle>
            Hey there, I'm Ludmila Sigismondo.<br></br>
            I'm an artist working and living 
            in London.
          </MainTitle>

          <GalleryItem src="/img/slider/slide1.png" />

          <Row>
            <Col sm={{ span: 22, offset: 2 }} md={{ span: 20, offset: 4 }} lg={{ span: 18, offset: 6 }}>
              <Paragraph>
                I was born in Rosario, Santa Fe province, Argentina in 1990.
                Since my father is an artist I spent most of my childhood
                surrounded by paintings and art books.
                In my house there were paint stains everywhere.
                I spent my daily life in my father's atelier and this gave me
                the opportunity to experiment with various materials.
                In this sense, painting was very much like a game for
                me and I enjoyed it greatly.
                <br></br><br></br>
                This environment was a decisive influence, leading me later to
                embark on a career in Fine Arts at university.
                Later on, those early experiences with oil painting helped me
                in my studies enormously.
                <br></br><br></br>
                College provided me the opportunity to improve my skills and
                learn from both teachers and classmates.
                It was in those college years that I painted my 
                <i>"Pixel Art"</i> and <i>"Nocturnal Portraits"</i> series.
              </Paragraph>
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 10, offset: 2 }} md={{ span: 9, offset: 4 }} lg={{ span: 8, offset: 6 }}>
              <SecondaryTitle>Exhibitions</SecondaryTitle>
              { exhibitionData.map(BasicInfo) }
            </Col>

            <Col sm={{ span: 10, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 8, offset: 2 }}>
              <SecondaryTitle>Education</SecondaryTitle>
              { educationData.map(BasicInfo) }
            </Col>
          </Row>
        </Section>
      </Wrapper>
    )
  }
};