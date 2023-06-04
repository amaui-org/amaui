import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToPhotosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotosW100Filled'

      short_name='AddToPhotos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 13.35h.7v-3h3v-.7h-3v-3H13v3h-3v.7h3ZM6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialAddToPhotosW100Filled.displayName = 'AmauiIconMaterialAddToPhotosW100Filled';

export default IconMaterialAddToPhotosW100Filled;
