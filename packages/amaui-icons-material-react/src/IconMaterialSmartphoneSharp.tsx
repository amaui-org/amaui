import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartphoneSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneSharp'
      short_name='Smartphone'

      {...props}
    >
      <path d="M5 23V1H19V23ZM7 18H17V6H7ZM7 21H17V20H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneSharp.displayName = 'AmauiIconMaterialSmartphoneSharp';

export default IconMaterialSmartphoneSharp;
