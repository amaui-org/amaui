import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToPhotos = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotos'

      short_name='AddToPhotos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 14h2v-3h3V9h-3V6h-2v3h-3v2h3Zm-7 4V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialAddToPhotos.displayName = 'AmauiIconMaterialAddToPhotos';

export default IconMaterialAddToPhotos;
