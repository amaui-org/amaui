import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWifiPro2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiPro2Filled'

      short_name='NestWifiPro2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-80q-77 0-124-40t-73-100q-26-61-34.5-130T120-479q0-102 15.5-176.5T192-781q41-50 110-74.5T480-880q109 0 178 24.5T768-781q41 51 56.5 125.5T840-479q0 60-8.5 129T797-220q-26 60-73 100T600-80H360Zm280-360q17 0 28.5-11.5T680-480q0-95-53-167t-149-73q-16 0-27 12t-11 29q0 17 12 28t29 11q57 0 87.5 49.5T600-479q0 17 11.5 28t28.5 11Z"/>
    </Icon>
  );
});

IconMaterialNestWifiPro2Filled.displayName = 'AmauiIconMaterialNestWifiPro2Filled';

export default IconMaterialNestWifiPro2Filled;
