import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGalleryThumbnailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GalleryThumbnailW100'

      short_name='GalleryThumbnail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.95 17.7V6.3h11.4v11.4Zm13.4-6.7V6.3h4.7V11Zm.7-.7h3.3V7h-3.3ZM3.65 17h10V7h-10Zm1.25-2.125h7.5L10.025 11.7 8.15 14.2l-1.375-1.825ZM16.35 17.7V13h4.7v4.7Zm.7-.7h3.3v-3.3h-3.3Zm-13.4 0V7v10Zm13.4-6.7V7v3.3Zm0 6.7v-3.3V17Z"/>
    </Icon>
  );
});

IconMaterialGalleryThumbnailW100.displayName = 'AmauiIconMaterialGalleryThumbnailW100';

export default IconMaterialGalleryThumbnailW100;
