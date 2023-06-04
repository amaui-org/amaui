import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiProxyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxyFilled'

      short_name='WifiProxy'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 936 0 456q95-97 219.5-148.5T480 256q136 0 260.5 51.5T960 456l-97 97q-24-11-50.5-16.5T760 531q-102 0-173.5 71.5T515 776q0 26 5.5 52.5T537 879l-57 57Zm160 0V656h170v110h110v170H640Zm60-60h50v-50h-50v50Zm0-110h50v-50h-50v50Zm110 110h50v-50h-50v50Z"/>
    </Icon>
  );
});

IconMaterialWifiProxyFilled.displayName = 'AmauiIconMaterialWifiProxyFilled';

export default IconMaterialWifiProxyFilled;
