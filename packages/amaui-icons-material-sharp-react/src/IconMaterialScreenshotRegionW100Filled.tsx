import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotRegionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotRegionW100Filled'

      short_name='ScreenshotRegion'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 898v-94h-94v-28h94v-94h28v94h94v28h-94v94h-28Zm-428-94V682h28v94h94v28H252Zm0-334V348h122v28h-94v94h-28Zm428 0v-94h-94v-28h122v122h-28Z"/>
    </Icon>
  );
});

IconMaterialScreenshotRegionW100Filled.displayName = 'AmauiIconMaterialScreenshotRegionW100Filled';

export default IconMaterialScreenshotRegionW100Filled;
