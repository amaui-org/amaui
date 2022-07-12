import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumSharpW700Filled'
      short_name='PhotoAlbum'

      {...props}
    >
      <path d="M3.15 22.85V1.15H20.85V22.85ZM7 18H17L13.625 13.5L11 17L9.375 14.825ZM11.075 4.3V11.3L13.575 9.8L16.075 11.3V4.3Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoAlbumSharpW700Filled;
