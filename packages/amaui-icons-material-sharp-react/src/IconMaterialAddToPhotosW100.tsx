import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToPhotosW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotosW100'

      short_name='AddToPhotos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 13.35h.7v-3h3v-.7h-3v-3H13v3h-3v.7h3ZM6.65 16.7V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12Z"/>
    </Icon>
  );
});

IconMaterialAddToPhotosW100.displayName = 'AmauiIconMaterialAddToPhotosW100';

export default IconMaterialAddToPhotosW100;
