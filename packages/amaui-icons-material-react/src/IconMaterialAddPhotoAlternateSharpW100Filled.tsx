import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternateSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateSharpW100Filled'
      short_name='AddPhotoAlternate'

      {...props}
    >
      <path d="M17.5 8V6H15.5V5.3H17.5V3.3H18.2V5.3H20.2V6H18.2V8ZM7.45 16.35H15.75L13.2 12.95L10.7 16.05L9.1 14.2ZM3.8 19.7V4.3H13.5V8H15.5V10H19.2V19.7Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateSharpW100Filled.displayName = 'AmauiIconMaterialAddPhotoAlternateSharpW100Filled';

export default IconMaterialAddPhotoAlternateSharpW100Filled;
