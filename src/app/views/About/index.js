import React, { Component } from 'react';
import { Row, Col } from 'antd';
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
      <div>
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
              Hello there! I am Ludmila Sigismondo,<br></br>
              an artist working and living 
              in London.
            </MainTitle>
          </Section>
        </Wrapper>

        <GalleryItem src="/img/ludmila.jpg" />

        <Wrapper>
          <Section>
            <Row>
              <Col sm={{ span: 22, offset: 2 }} md={{ span: 20, offset: 4 }} lg={{ span: 18, offset: 6 }}>
                <Paragraph>
                  Born in Rosario, Argentina in 1990, the daughter of an artist,
                  Ludmila spent her formative years surrounded by paintings,
                  art publications and paint stains covering the house. Her 
                  childhood greatly contributed to her current style and
                  passion for creating art. Spending each day in her father’s studio
                  gave her the opportunity and the means to experiment with various
                  materials and refine her own style. It is for this reason that she
                  saw painting as more of a game, entertaining her throughout
                  her childhood and adolescence.
                  <br></br><br></br>
                  Having been influenced so strongly by this environment Ludmila
                  decided to pursue a career in Fine Arts, starting with University.
                  All the time she had spent with oil painting growing up, became a
                  defining factor in aiding her University studies. Whilst at University she was provided
                  with the opportunity to enhance her skills and learn from teachers and fellow classmates.
                  It is here that she was inspired to create her <i>‘Pixel Art’</i> and <i>‘Nocturnal Portraits’</i> series.
                  <span>— Victoria Ellison</span>
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
      </div>
    )
  }
};