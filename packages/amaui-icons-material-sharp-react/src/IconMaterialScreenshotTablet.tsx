import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotTablet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotTablet'

      short_name='ScreenshotTablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-640h880v640H40Zm120-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Zm360 440h160v-160h-60v100H520v60ZM280-520h60v-100h100v-60H280v160Z"/>
    </Icon>
  );
});

IconMaterialScreenshotTablet.displayName = 'AmauiIconMaterialScreenshotTablet';

export default IconMaterialScreenshotTablet;
