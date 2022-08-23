import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayCurrentPortraitSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentPortraitSharp'
      short_name='StayCurrentPortrait'

      {...props}
    >
      <path d="M5 23V1H19V23ZM7 18H17V6H7ZM7 21H17V20H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentPortraitSharp.displayName = 'AmauiIconMaterialStayCurrentPortraitSharp';

export default IconMaterialStayCurrentPortraitSharp;
