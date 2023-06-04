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
      <path d="M664 831h77v-77h-77v77Zm0-105h77v-77h-77v77Zm105 105h77v-77h-77v77Zm-133 28V621h133v105h105v133H636Zm-156 3L74 456q85-73 189.5-110.5T480 308q112 0 216.5 37.5T886 456l-54 54q-8-3-15.5-5t-15.5-4l43-43q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 39-39q2 8 4 15.5t5 15.5l-48 48Zm0-283Z"/>
    </Icon>
  );
});

IconMaterialWifiProxyW100.displayName = 'AmauiIconMaterialWifiProxyW100';

export default IconMaterialWifiProxyW100;
