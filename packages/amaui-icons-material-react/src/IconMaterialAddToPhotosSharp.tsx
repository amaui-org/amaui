import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToPhotosSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotosSharp'
      short_name='AddToPhotos'

      {...props}
    >
      <path d="M13 14H15V11H18V9H15V6H13V9H10V11H13ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  )
});

export default IconMaterialAddToPhotosSharp;
