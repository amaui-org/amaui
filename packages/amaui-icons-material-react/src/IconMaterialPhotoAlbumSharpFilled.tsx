import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumSharpFilled'
      short_name='PhotoAlbum'

      {...props}
    >
      <path d="M4 22V2H20V22ZM7 18H17L13.625 13.5L11 17L9.375 14.825ZM11 4V11L13.5 9.5L16 11V4Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoAlbumSharpFilled;
