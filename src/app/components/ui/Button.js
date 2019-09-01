import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonDownload = styled(Button)`
  margin: 20px auto 0;
  border: 2px solid #000 !important;
  background-color: #fff;
  color: #000 !important;

  &:hover {
    background-color: #000 !important;
    color: #fff !important;
  }

  & small {
    margin-left: 5px;
  }

  .dark-theme & {
    border-color: #f0f0f0 !important;
    background-color: #111 !important;
    color: #f0f0f0 !important;
  }

  .dark-theme &:hover {
    background-color: #f0f0f0 !important;
    color: #111 !important;
  }
`;