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
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm6.1-11.2 1.25-.75 1.25.75q.2.125.4 0t.2-.35V4h-3.7v5.15q0 .225.2.35.2.125.4 0Zm-4.15 7.85h6.7q.275 0 .375-.225.1-.225-.05-.425L14 14.35q-.125-.15-.312-.15-.188 0-.313.15l-2.175 2.7-1.275-1.475q-.125-.15-.312-.15-.188 0-.313.175l-.85 1.1q-.15.2-.05.425.1.225.35.225Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbumW100Filled.displayName = 'AmauiIconMaterialPhotoAlbumW100Filled';

export default IconMaterialPhotoAlbumW100Filled;
