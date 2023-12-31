import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGeneralDeviceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneralDeviceW100Filled'

      short_name='GeneralDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-292v-496h240v496H360Zm0 88v-28h240v28H360Z"/>
    </Icon>
  );
});

IconMaterialGeneralDeviceW100Filled.displayName = 'AmauiIconMaterialGeneralDeviceW100Filled';

export default IconMaterialGeneralDeviceW100Filled;
