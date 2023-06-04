import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFoldW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFoldW100Filled'

      short_name='DevicesFold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.3 20.5q-.625 0-1.062-.438Q10.8 19.625 10.8 19V4.225q0-.425.238-.8.237-.375.637-.55l2.575-1.15q.775-.35 1.438.125.662.475.662 1.25v.4h3.35q.625 0 1.063.438.437.437.437 1.062v14q0 .625-.437 1.062-.438.438-1.063.438Zm-.35-.825q.05.05.138.088.087.037.212.037h7.4q.35 0 .575-.225.225-.225.225-.575V5q0-.35-.225-.575Q20.05 4.2 19.7 4.2h-3.35v12.525q0 .5-.262.862-.263.363-.563.488ZM2.8 4.5v-1h1v1Zm0 16v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4-4v-1h1v1Zm0 16v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialDevicesFoldW100Filled.displayName = 'AmauiIconMaterialDevicesFoldW100Filled';

export default IconMaterialDevicesFoldW100Filled;
