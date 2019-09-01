// core
import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { UseWindowDimensions } from '../../utils';

const R_SIZE = 500

const CustomLayoutHeader = styled(Layout.Header)`
  background  : #fff !important;
  height      : initial !important;
  padding     : 0 1px !important;
  text-align  : left !important;
  line-height : 64px !important;

  @media (min-width: ${ R_SIZE }px) {
    height      : 64px !important;
    padding     : 0 50px !important;
    text-align  : center !important;
  }
`

const CustomSubmenuItem = styled(Menu.SubMenu)`
  font-family    : 'Playfair Display';
  letter-spacing : 1px;
  font-weight    : 500 !important
  color          : #999 !important;;

  :hover {
    border-color : #E0E0E0 !important;
  }

  &.ant-menu-submenu-active,
  &.ant-menu-submenu-open,
  &.ant-menu-submenu-selected,
  &.ant-menu-item-selected {
    border-color: #BDBDBD !important;
  }

  &.ant-menu-item-selected a {
    color: #222 !important;
  }

  &.ant-menu-submenu-active,
  &.ant-menu-submenu-open,
  &:hover a {
    color: #222 !important;
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
 
  &.ant-menu-item-active,
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
    case '/paintings/portraits': {
      selected = [ 'OilPortraits' ];
      break;
    }
    case '/paintings/pixel-art': {
      selected = [ 'PixelArt' ];
      break;
    }
    case '/drawings': {
      selected = [ 'Drawings' ];
      break;
    }
    case '/about': {
      selected = [ 'About' ];
      break;
    }
    default: {
      break;
    }
  }

  return (
    <CustomLayoutHeader>
      <Menu theme="light" defaultSelectedKeys={ selected } mode={ mode } style={{ border: 0 }}>
        <CustomSubmenuItem title="Paintings">
          <CustomMenuItem key="PixelArt">
            <CustomLink to="/paintings/pixel-art">Pixel Art</CustomLink>
          </CustomMenuItem>
          <CustomMenuItem key="OilPortraits">
            <CustomLink to="/paintings/portraits">Portraits</CustomLink>
          </CustomMenuItem>
        </CustomSubmenuItem>

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