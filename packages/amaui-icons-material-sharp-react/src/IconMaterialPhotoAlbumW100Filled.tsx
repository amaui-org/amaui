import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumW100Filled'

      short_name='PhotoAlbum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h13.4v17.4Zm2.65-3.35h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM12.3 4v5.85l1.85-1.1L16 9.85V4Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbumW100Filled.displayName = 'AmauiIconMaterialPhotoAlbumW100Filled';

export default IconMaterialPhotoAlbumW100Filled;
