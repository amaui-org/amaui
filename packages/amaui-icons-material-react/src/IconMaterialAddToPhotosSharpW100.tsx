import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToPhotosSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotosSharpW100'
      short_name='AddToPhotos'

      {...props}
    >
      <path d="M13 13.35H13.7V10.35H16.7V9.65H13.7V6.65H13V9.65H10V10.35H13ZM6.65 16.7V3.3H20.05V16.7ZM7.35 16H19.35V4H7.35ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4ZM7.35 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialAddToPhotosSharpW100.displayName = 'AmauiIconMaterialAddToPhotosSharpW100';

export default IconMaterialAddToPhotosSharpW100;
