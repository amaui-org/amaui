import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumSharp'
      short_name='PhotoAlbum'

      {...props}
    >
      <path d="M4 22V2H20V22ZM6 20H18V4H16V11L13.5 9.5L11 11V4H6ZM7 18H17L13.625 13.5L11 17L9.375 14.825ZM11 4H13.5H16ZM6 4H11H13.5H16H18H6Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoAlbumSharp;
