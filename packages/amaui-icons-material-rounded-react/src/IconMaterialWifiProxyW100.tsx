import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiProxyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxyW100'

      short_name='WifiProxy'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M664 831h77v-77h-77v77Zm0-105h77v-77h-77v77Zm105 105h77v-77h-77v77Zm-103 28q-12.75 0-21.375-8.625T636 829V651q0-12.75 8.625-21.375T666 621h73q12.75 0 21.375 8.625T769 651v75h75q12.75 0 21.375 8.625T874 756v73q0 12.75-8.625 21.375T844 859H666Zm-207-18L98.258 480.258Q88 470 89 456.5t12.406-21.635Q183 372 279.358 340 375.716 308 480 308q103 0 200 32t178.594 94.865Q870 443 871 456.5q1 13.5-9 23.5l-30 30q-8-3-15.5-5t-15.5-4l43-43q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 39-39q2 8 4 15.5t5 15.5l-27 27q-9 9-21 9t-21-9Zm21-262Z"/>
    </Icon>
  );
});

IconMaterialWifiProxyW100.displayName = 'AmauiIconMaterialWifiProxyW100';

export default IconMaterialWifiProxyW100;
