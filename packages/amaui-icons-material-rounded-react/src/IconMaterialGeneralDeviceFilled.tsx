import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGeneralDeviceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneralDeviceFilled'

      short_name='GeneralDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240q-17 0-28.5-11.5T320-280v-480q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v480q0 17-11.5 28.5T600-240H360Zm0 40h240q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200Z"/>
    </Icon>
  );
});

IconMaterialGeneralDeviceFilled.displayName = 'AmauiIconMaterialGeneralDeviceFilled';

export default IconMaterialGeneralDeviceFilled;
