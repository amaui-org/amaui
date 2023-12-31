import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotTabletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotTabletW100Filled'

      short_name='ScreenshotTablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-212v-536h776v536H92Zm122-28h532v-480H214v480Zm354-60h118v-118h-28v90h-90v28ZM274-542h28v-90h90v-28H274v118Z"/>
    </Icon>
  );
});

IconMaterialScreenshotTabletW100Filled.displayName = 'AmauiIconMaterialScreenshotTabletW100Filled';

export default IconMaterialScreenshotTabletW100Filled;
