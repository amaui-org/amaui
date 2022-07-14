import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumSharpW100Filled'
      short_name='PhotoAlbum'

      {...props}
    >
      <path d="M5.3 20.7V3.3H18.7V20.7ZM7.95 17.35H16.25L13.7 13.95L11.2 17.05L9.6 15.2ZM12.3 4V9.85L14.15 8.75L16 9.85V4Z"/>
    </Icon>
  );
});

export default IconMaterialPhotoAlbumSharpW100Filled;
