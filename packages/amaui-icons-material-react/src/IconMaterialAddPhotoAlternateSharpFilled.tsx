import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternateSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateSharpFilled'
      short_name='AddPhotoAlternate'

      {...props}
    >
      <path d="M17 9V7H15V5H17V3H19V5H21V7H19V9ZM6 17H18L14.25 12L11.25 16L9 13ZM3 21V3H13V9H15V11H21V21Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateSharpFilled.displayName = 'AmauiIconMaterialAddPhotoAlternateSharpFilled';

export default IconMaterialAddPhotoAlternateSharpFilled;
