import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesW100'

      short_name='Devices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.275 18.4v-1.05h2V5.25h15.05v.7H5.975v11.4h5.35v1.05Zm12.05 0V8.95h5.4v9.45Zm.7-1.05h4v-7.7h-4Z"/>
    </Icon>
  );
});

IconMaterialDevicesW100.displayName = 'AmauiIconMaterialDevicesW100';

export default IconMaterialDevicesW100;
