import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotTabletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotTabletFilled'

      short_name='ScreenshotTablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-640h880v640H40Zm200-80h480v-480H240v480Zm280-40h160v-160h-60v100H520v60ZM280-520h60v-100h100v-60H280v160Z"/>
    </Icon>
  );
});

IconMaterialScreenshotTabletFilled.displayName = 'AmauiIconMaterialScreenshotTabletFilled';

export default IconMaterialScreenshotTabletFilled;
