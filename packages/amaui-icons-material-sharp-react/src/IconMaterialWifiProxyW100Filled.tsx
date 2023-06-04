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
      <path d="M480 862 74 456q85-73 189.5-110.5T480 308q112 0 216.5 37.5T886 456l-54 54q-20-8-41.468-11.5Q769.063 495 748 495q-97 0-166 69t-69 166q0 21.063 3.5 42.532Q520 794 528 814l-48 48Zm156-3V621h133v105h105v133H636Zm28-28h77v-77h-77v77Zm0-105h77v-77h-77v77Zm105 105h77v-77h-77v77Z"/>
    </Icon>
  );
});

IconMaterialWifiProxyW100Filled.displayName = 'AmauiIconMaterialWifiProxyW100Filled';

export default IconMaterialWifiProxyW100Filled;
