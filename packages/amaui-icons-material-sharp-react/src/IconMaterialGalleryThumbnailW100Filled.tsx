import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGalleryThumbnailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GalleryThumbnailW100Filled'

      short_name='GalleryThumbnail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.95 17.7V6.3h11.4v11.4Zm13.4-6.7V6.3h4.7V11ZM4.9 14.875h7.5L10.025 11.7 8.15 14.2l-1.375-1.825ZM16.35 17.7V13h4.7v4.7Z"/>
    </Icon>
  );
});

IconMaterialGalleryThumbnailW100Filled.displayName = 'AmauiIconMaterialGalleryThumbnailW100Filled';

export default IconMaterialGalleryThumbnailW100Filled;
