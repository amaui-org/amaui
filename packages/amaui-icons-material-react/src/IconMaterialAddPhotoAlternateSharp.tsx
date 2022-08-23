import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternateSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateSharp'
      short_name='AddPhotoAlternate'

      {...props}
    >
      <path d="M3 21V3H14V5H5V19H19V10H21V21ZM17 9V7H15V5H17V3H19V5H21V7H19V9ZM6 17H18L14.25 12L11.25 16L9 13ZM5 11V19V5V9V11Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateSharp.displayName = 'AmauiIconMaterialAddPhotoAlternateSharp';

export default IconMaterialAddPhotoAlternateSharp;
