import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoAlbum = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbum'

      short_name='PhotoAlbum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v20Zm2-2h12V4h-2v7l-2.5-1.5L11 11V4H6Zm1-2h10l-3.375-4.5L11 17l-1.625-2.175Zm4-14h5ZM6 4h12H6Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbum.displayName = 'AmauiIconMaterialPhotoAlbum';

export default IconMaterialPhotoAlbum;
