import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumW100'

      short_name='PhotoAlbum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h13.4v17.4ZM6 20h12V4h-2v5.85l-1.85-1.1-1.85 1.1V4H6Zm1.95-2.65h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM12.3 4H16ZM6 4h12H6Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbumW100.displayName = 'AmauiIconMaterialPhotoAlbumW100';

export default IconMaterialPhotoAlbumW100;
