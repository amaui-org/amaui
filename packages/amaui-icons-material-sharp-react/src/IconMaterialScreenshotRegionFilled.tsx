import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotRegionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotRegionFilled'

      short_name='ScreenshotRegion'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 976V856H560v-80h120V656h80v120h120v80H760v120h-80ZM200 856V656h80v120h120v80H200Zm0-360V296h200v80H280v120h-80Zm480 0V376H560v-80h200v200h-80Z"/>
    </Icon>
  );
});

IconMaterialScreenshotRegionFilled.displayName = 'AmauiIconMaterialScreenshotRegionFilled';

export default IconMaterialScreenshotRegionFilled;
