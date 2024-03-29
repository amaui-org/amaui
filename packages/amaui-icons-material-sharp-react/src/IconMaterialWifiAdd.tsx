import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiAdd'

      short_name='WifiAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 936V816H600v-80h120V616h80v120h120v80H800v120h-80Zm-240 0L0 456q95-97 219.5-148.5T480 256q136 0 260.5 51.5T960 456l-97 97q-21-10-44-15.5t-48-6.5l73-73q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 35-35q1 25 6.5 48t15.5 44l-57 57Zm0-357Z"/>
    </Icon>
  );
});

IconMaterialWifiAdd.displayName = 'AmauiIconMaterialWifiAdd';

export default IconMaterialWifiAdd;
