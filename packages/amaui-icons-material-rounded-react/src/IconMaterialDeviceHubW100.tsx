import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeviceHubW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHubW100'

      short_name='DeviceHub'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.05 19.7q-.325 0-.537-.213-.213-.212-.213-.537v-2.2q0-.325.213-.538Q4.725 16 5.05 16H7.5l4.15-4.15v-2.8q-.85-.2-1.425-.838Q9.65 7.575 9.65 6.7q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .875-.575 1.512-.575.638-1.425.838v2.8L16.5 16h2.45q.325 0 .538.212.212.213.212.538v2.2q0 .325-.212.537-.213.213-.538.213h-2.2q-.325 0-.538-.213Q16 19.275 16 18.95V16.5l-4-4-4 4v2.45q0 .325-.213.537-.212.213-.537.213Z"/>
    </Icon>
  );
});

IconMaterialDeviceHubW100.displayName = 'AmauiIconMaterialDeviceHubW100';

export default IconMaterialDeviceHubW100;
