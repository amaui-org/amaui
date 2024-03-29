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
      <path d="M700 876h50v-50h-50v50Zm0-110h50v-50h-50v50Zm110 110h50v-50h-50v50Zm-170 60V656h170v110h110v170H640Zm-160 0L0 456q95-97 219.5-148.5T480 256q136 0 260.5 51.5T960 456l-97 97q-21-10-44-15.5t-48-6.5l73-73q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 35-35q1 25 6.5 48t15.5 44l-57 57Zm0-357Z"/>
    </Icon>
  );
});

IconMaterialWifiProxy.displayName = 'AmauiIconMaterialWifiProxy';

export default IconMaterialWifiProxy;
