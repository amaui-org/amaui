import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeviceHubW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHubW100Filled'

      short_name='DeviceHub'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V16h3.2l4.15-4.15v-2.8q-.85-.2-1.425-.838Q9.65 7.575 9.65 6.7q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .875-.575 1.512-.575.638-1.425.838v2.8L16.5 16h3.2v3.7H16v-3.2l-4-4-4 4v3.2Z"/>
    </Icon>
  );
});

IconMaterialDeviceHubW100Filled.displayName = 'AmauiIconMaterialDeviceHubW100Filled';

export default IconMaterialDeviceHubW100Filled;
