import React, { Component } from 'react';
import styled from 'styled-components';
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

export class Home extends Component {
  render() {
    return(
      <HomeWrapper>
        { previewData.map(CategoryMappedFunction) }
      </HomeWrapper>
    )
  }
};