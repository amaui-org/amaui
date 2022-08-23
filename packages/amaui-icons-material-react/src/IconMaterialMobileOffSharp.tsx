import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffSharp'
      short_name='MobileOff'

      {...props}
    >
      <path d="M20.5 23.3 0.7 3.5 2.1 2.1 21.9 21.9ZM5 6.425 7 8.425V18H16.6L19 20.4V23H5ZM7 20V21H17V20ZM19 1V16.15L17 14.15V6H8.825L5.15 2.3V1ZM7 4H17V3H7ZM7 20V21V20ZM7 4V3Z"/>
    </Icon>
  );
});

IconMaterialMobileOffSharp.displayName = 'AmauiIconMaterialMobileOffSharp';

export default IconMaterialMobileOffSharp;
