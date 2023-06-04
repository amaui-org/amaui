import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGalleryThumbnailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GalleryThumbnailFilled'

      short_name='GalleryThumbnail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 19V5h14v14Zm16-8V5h6v6ZM4 15h8l-2.625-3.5L7.5 14l-1.375-1.825Zm13 4v-6h6v6Z"/>
    </Icon>
  );
});

IconMaterialGalleryThumbnailFilled.displayName = 'AmauiIconMaterialGalleryThumbnailFilled';

export default IconMaterialGalleryThumbnailFilled;
