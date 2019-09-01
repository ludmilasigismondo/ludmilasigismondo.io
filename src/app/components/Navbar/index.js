// core
import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { UseWindowDimensions } from '../../utils';

const R_SIZE = 500

const styleMenu = {
  lineHeight : '64px',
  textAlign  : 'center',
  border     : '0'
}

const CustomLayoutHeader = styled(Layout.Header)`
  background  : #fff !important;
  height      : initial !important;
  padding     : 0 1px !important;
  line-height : 64px !important;

  @media (min-width: ${ R_SIZE }px) {
    height      : 64px !important;
    padding     : 0 50px !important;
    line-height : 64px !important;
  }
`

const CustomMenuItem = styled(Menu.Item)`
  font-family    : 'Playfair Display';
  letter-spacing : 1px;

  :hover {
    border-color: #E0E0E0 !important;
  }

  &.ant-menu-item-selected {
    border-color: #BDBDBD !important;
  }
  
  &.ant-menu-item-selected a {
    color: #222 !important;
  }
`

const CustomLink = styled(NavLink)`
  color       : #999 !important;
  font-weight : 300;

  :hover {
    color: #222 !important;
  }
`

const Navbar = () => {
  const { width } = UseWindowDimensions();

  const mode   = (width <= R_SIZE) ? 'inline' : 'horizontal';
  const path   = window.location.pathname;
  let selected = [];

  switch (path) {
    case '/':
    case '/paintings': {
      selected = ['Paintings'];
      break;
    }
    case '/drawings': {
      selected = ['Drawings'];
      break;
    }
    case '/about': {
      selected = ['About'];
      break;
    }
    default: {
      break;
    }
  }

  return (
    <CustomLayoutHeader>
      <Menu theme="light" defaultSelectedKeys={ selected } mode={ mode } style={ styleMenu }>
        <CustomMenuItem key="Paintings">
          <CustomLink to="/paintings">Paintings</CustomLink>
        </CustomMenuItem>

        <CustomMenuItem key="Drawings">
          <CustomLink to="/drawings">Drawings</CustomLink>
        </CustomMenuItem>

        <CustomMenuItem key="About">
          <CustomLink to="/about">About</CustomLink>
        </CustomMenuItem>
      </Menu>
    </CustomLayoutHeader>
  )
}


export default Navbar