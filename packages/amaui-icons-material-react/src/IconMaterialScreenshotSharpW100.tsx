import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenshotSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotSharpW100'
      short_name='Screenshot'

      {...props}
    >
      <path d="M8.5 10.05V6.85H11.7V7.55H9.2V10.05ZM12.3 17.15V16.45H14.8V13.95H15.5V17.15ZM6.3 21.7V2.3H17.7V21.7ZM7 18.65H17V5.35H7ZM7 21H17V19.35H7ZM7 4.65H17V3H7ZM7 4.65V3V4.65ZM7 21V19.35V21Z"/>
    </Icon>
  );
});

IconMaterialScreenshotSharpW100.displayName = 'AmauiIconMaterialScreenshotSharpW100';

export default IconMaterialScreenshotSharpW100;
