import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiAddFilled'

      short_name='WifiAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 936 0 456q95-97 219.5-148.5T480 256q136 0 260.5 51.5T960 456l-97 97q-24-11-50.5-16.5T760 531q-102 0-173.5 71.5T515 776q0 13 1.5 26.5t4 26.5q2.5 13 6.5 25.5t10 24.5l-57 57Zm240 0V816H600v-80h120V616h80v120h120v80H800v120h-80Z"/>
    </Icon>
  );
});

IconMaterialWifiAddFilled.displayName = 'AmauiIconMaterialWifiAddFilled';

export default IconMaterialWifiAddFilled;
