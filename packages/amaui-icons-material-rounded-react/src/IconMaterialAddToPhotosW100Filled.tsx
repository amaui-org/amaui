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
      <path d="M13.35 13.35q.15 0 .25-.1t.1-.25v-2.65h2.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H13.7V7q0-.15-.1-.25t-.25-.1q-.15 0-.25.1T13 7v2.65h-2.65q-.15 0-.25.1T10 10q0 .15.1.25t.25.1H13V13q0 .15.1.25t.25.1Zm-5.2 3.35q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225H16.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAddToPhotosW100Filled.displayName = 'AmauiIconMaterialAddToPhotosW100Filled';

export default IconMaterialAddToPhotosW100Filled;
