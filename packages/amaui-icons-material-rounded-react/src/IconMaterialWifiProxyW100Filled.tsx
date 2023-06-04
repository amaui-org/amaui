import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiProxyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxyW100Filled'

      short_name='WifiProxy'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M459 841 98.258 480.258Q88 470 89 456.5t12.406-21.635Q183 372 279.358 340 375.716 308 480 308q103 0 200 32t178.594 94.865Q870 443 871 456.5q1 13.5-9 23.5l-30 30q-20-8-42-11.5t-42-3.5q-97 0-166 69t-69 166q0 20 3.5 42t11.5 42l-27 27q-9 9-21 9t-21-9Zm207 18q-12.75 0-21.375-8.625T636 829V651q0-12.75 8.625-21.375T666 621h73q12.75 0 21.375 8.625T769 651v75h75q12.75 0 21.375 8.625T874 756v73q0 12.75-8.625 21.375T844 859H666Zm-2-28h77v-77h-77v77Zm0-105h77v-77h-77v77Zm105 105h77v-77h-77v77Z"/>
    </Icon>
  );
});

IconMaterialWifiProxyW100Filled.displayName = 'AmauiIconMaterialWifiProxyW100Filled';

export default IconMaterialWifiProxyW100Filled;
