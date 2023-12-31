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
      <path d="M200-680v-200h200v80H280v120h-80Zm0 600v-200h80v120h120v80H200Zm480-600v-120H560v-80h200v200h-80ZM560-80v-80h120v-120h80v200H560Z"/>
    </Icon>
  );
});

IconMaterialScreenshotFrame.displayName = 'AmauiIconMaterialScreenshotFrame';

export default IconMaterialScreenshotFrame;
