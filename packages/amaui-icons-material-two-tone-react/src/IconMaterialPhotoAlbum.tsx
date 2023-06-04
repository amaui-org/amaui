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
      <rect fill="none" height="24" width="24"/><path d="M16,4v7l-2.5-1.5L11,11V4H6v16h12V4H16z M7,18l2.38-3.17L11,17l2.62-3.5L17,18H7z" opacity=".3"/><path d="M18,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,20H6V4h5v7l2.5-1.5L16,11V4h2V20 z M13.62,13.5L17,18H7l2.38-3.17L11,17L13.62,13.5z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbum.displayName = 'AmauiIconMaterialPhotoAlbum';

export default IconMaterialPhotoAlbum;
