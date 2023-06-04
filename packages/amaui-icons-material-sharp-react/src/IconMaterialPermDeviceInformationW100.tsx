import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermDeviceInformationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDeviceInformationW100'

      short_name='PermDeviceInformation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 15.8v-4.85h.7v4.85ZM12 9.2q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15ZM6.3 21.7V2.3h11.4v19.4Zm.7-3.05h10V5.35H7ZM7 21h10v-1.65H7ZM7 4.65h10V3H7Zm0 0V3v1.65ZM7 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformationW100.displayName = 'AmauiIconMaterialPermDeviceInformationW100';

export default IconMaterialPermDeviceInformationW100;
