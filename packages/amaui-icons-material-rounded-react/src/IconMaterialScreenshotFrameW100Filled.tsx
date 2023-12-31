import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotFrameW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotFrameW100Filled'

      short_name='ScreenshotFrame'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-680v-88q0-26 17-43t43-17h88v28h-88q-12 0-22 10t-10 22v88h-28Zm60 548q-26 0-43-17t-17-43v-88h28v88q0 12 10 22t22 10h88v28h-88Zm368-548v-88q0-12-10-22t-22-10h-88v-28h88q26 0 43 17t17 43v88h-28ZM560-132v-28h88q12 0 22-10t10-22v-88h28v88q0 26-17 43t-43 17h-88Z"/>
    </Icon>
  );
});

IconMaterialScreenshotFrameW100Filled.displayName = 'AmauiIconMaterialScreenshotFrameW100Filled';

export default IconMaterialScreenshotFrameW100Filled;
