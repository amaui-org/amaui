import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGeneralDeviceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneralDeviceW100'

      short_name='GeneralDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-292v-496h240v496H360Zm28-28h184v-440H388v440Zm-28 116v-28h240v28H360Zm28-116h184-184Z"/>
    </Icon>
  );
});

IconMaterialGeneralDeviceW100.displayName = 'AmauiIconMaterialGeneralDeviceW100';

export default IconMaterialGeneralDeviceW100;
