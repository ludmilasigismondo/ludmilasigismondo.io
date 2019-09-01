import React, { Component } from 'react';
import { Row, Col } from 'antd';
// custom componentes
import { PreviewImg, Wrapper, Section, SecondaryTitle } from '../../components/ui';

const previewData = [{
  url: '/drawings/watercolor/various',
  title: 'Watercolor Various',
  src: '/img/preview/01.png'
}, {
  url: '/drawings/watercolor/once-upon-a-time',
  title: 'Once Upon a Time',
  src: '/img/preview/02.png'
}, {
  url: '/drawings/sketches',
  title: 'Sketches',
  src: '/img/preview/03.png'
}];

export class Home extends Component {
  render() {
    const sm = { span: 8, offset: 0 }

    return(
      <Wrapper>
        <Section>
          <SecondaryTitle center>Featured Work</SecondaryTitle>

          <Row>
            {
              previewData.map(({ url, title, src }, i) =>
                <Col key={ i } sm={ sm }>
                  <PreviewImg url={ url }
                    title={ title }
                    src={ src }
                  />
                </Col>
              )
            }
          </Row>
        </Section>
      </Wrapper>
    )
  }
};