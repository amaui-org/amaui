import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGalleryThumbnail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GalleryThumbnail'

      short_name='GalleryThumbnail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 19V5h14v14Zm16-8V5h6v6Zm2-2h2V7h-2ZM3 17h10V7H3Zm1-2h8l-2.625-3.5L7.5 14l-1.375-1.825Zm13 4v-6h6v6Zm2-2h2v-2h-2ZM3 17V7v10Zm16-8V7v2Zm0 8v-2 2Z"/>
    </Icon>
  );
});

IconMaterialGalleryThumbnail.displayName = 'AmauiIconMaterialGalleryThumbnail';

export default IconMaterialGalleryThumbnail;
