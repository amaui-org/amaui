import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiProxy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxy'

      short_name='WifiProxy'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M700 876h50v-50h-50v50Zm0-110h50v-50h-50v50Zm110 110h50v-50h-50v50Zm-130 60q-17 0-28.5-11.5T640 896V696q0-17 11.5-28.5T680 656h90q17 0 28.5 11.5T810 696v70h70q17 0 28.5 11.5T920 806v90q0 17-11.5 28.5T880 936H680Zm-228-28L30 486q-12-12-12-29.5T31 428q93-85 208.5-128.5T480 256q125 0 240.5 43.5T929 428q13 11 13 28.5T930 486l-67 67q-21-10-44-15.5t-48-6.5l73-73q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 35-35q1 25 6.5 48t15.5 44l-29 29q-12 12-28 12t-28-12Zm28-329Z"/>
    </Icon>
  );
});

IconMaterialWifiProxy.displayName = 'AmauiIconMaterialWifiProxy';

export default IconMaterialWifiProxy;
