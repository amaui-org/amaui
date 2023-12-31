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
      <path d="M252-680v-148h148v28H280v120h-28Zm0 548v-148h28v120h120v28H252Zm428-548v-120H560v-28h148v148h-28ZM560-132v-28h120v-120h28v148H560Z"/>
    </Icon>
  );
});

IconMaterialScreenshotFrameW100Filled.displayName = 'AmauiIconMaterialScreenshotFrameW100Filled';

export default IconMaterialScreenshotFrameW100Filled;
