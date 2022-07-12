import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToPhotosSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotosSharpW100Filled'
      short_name='AddToPhotos'

      {...props}
    >
      <path d="M13 13.35H13.7V10.35H16.7V9.65H13.7V6.65H13V9.65H10V10.35H13ZM6.65 16.7V3.3H20.05V16.7ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4Z"/>
    </Icon>
  )
});

export default IconMaterialAddToPhotosSharpW100Filled;
