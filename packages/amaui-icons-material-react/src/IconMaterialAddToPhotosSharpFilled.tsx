import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToPhotosSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotosSharpFilled'
      short_name='AddToPhotos'

      {...props}
    >
      <path d="M13 14H15V11H18V9H15V6H13V9H10V11H13ZM6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialAddToPhotosSharpFilled;
