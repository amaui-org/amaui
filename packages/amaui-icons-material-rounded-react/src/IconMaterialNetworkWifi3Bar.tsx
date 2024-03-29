import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi3Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi3Bar'

      short_name='NetworkWifi3Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 11.95q1.325-.95 2.9-1.488 1.575-.537 3.3-.537 1.725 0 3.3.537 1.575.538 2.9 1.488l2.9-2.9q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05Zm6.2 8.625q-.2 0-.375-.063-.175-.062-.325-.212L.7 9.7q-.3-.3-.287-.713.012-.412.312-.687 2.35-2.125 5.238-3.212Q8.85 4 12 4q3.175 0 6.062 1.088Q20.95 6.175 23.275 8.3q.3.275.313.687.012.413-.288.713L12.7 20.3q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi3Bar.displayName = 'AmauiIconMaterialNetworkWifi3Bar';

export default IconMaterialNetworkWifi3Bar;
