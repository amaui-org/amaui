import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenshotSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotSharpW100Filled'
      short_name='Screenshot'

      {...props}
    >
      <path d="M8.5 10.05V6.85H11.7V7.55H9.2V10.05ZM12.3 17.15V16.45H14.8V13.95H15.5V17.15ZM6.3 21.7V2.3H17.7V21.7ZM7 18.65H17V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialScreenshotSharpW100Filled.displayName = 'AmauiIconMaterialScreenshotSharpW100Filled';

export default IconMaterialScreenshotSharpW100Filled;
