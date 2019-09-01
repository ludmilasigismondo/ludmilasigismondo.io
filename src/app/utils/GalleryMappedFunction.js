import React from 'react';
import { GalleryItem } from '../components/ui';

export const GalleryMappedFunction = ({src, title, year, type, messures}, idx) =>
  <GalleryItem
    key={ idx }
    src={ src }
    title={ title }
    year={ year }
    type={ type }
    messures={ messures }
  />