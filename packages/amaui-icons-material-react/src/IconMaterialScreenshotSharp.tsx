import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenshotSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotSharp'
      short_name='Screenshot'

      {...props}
    >
      <path d="M8 11V7H12V8.5H9.5V11ZM12 17V15.5H14.5V13H16V17ZM5 23V1H19V23ZM7 18H17V6H7ZM7 21H17V20H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  );
});

IconMaterialScreenshotSharp.displayName = 'AmauiIconMaterialScreenshotSharp';

export default IconMaterialScreenshotSharp;
