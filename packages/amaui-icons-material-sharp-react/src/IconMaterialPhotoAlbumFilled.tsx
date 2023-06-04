import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumFilled'

      short_name='PhotoAlbum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v20Zm3-4h10l-3.375-4.5L11 17l-1.625-2.175Zm4-14v7l2.5-1.5L16 11V4Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbumFilled.displayName = 'AmauiIconMaterialPhotoAlbumFilled';

export default IconMaterialPhotoAlbumFilled;
