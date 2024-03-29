import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotFrame = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotFrame'

      short_name='ScreenshotFrame'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-680v-120q0-33 23.5-56.5T280-880h120v80H280v120h-80Zm80 600q-33 0-56.5-23.5T200-160v-120h80v120h120v80H280Zm400-600v-120H560v-80h120q33 0 56.5 23.5T760-800v120h-80ZM560-80v-80h120v-120h80v120q0 33-23.5 56.5T680-80H560Z"/>
    </Icon>
  );
});

IconMaterialScreenshotFrame.displayName = 'AmauiIconMaterialScreenshotFrame';

export default IconMaterialScreenshotFrame;
