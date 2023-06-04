import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevices = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Devices'

      short_name='Devices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20v-3h2V4h17v2H6v11h6v3Zm12 0V8h8v12Zm2-3h4v-7h-4Z"/>
    </Icon>
  );
});

IconMaterialDevices.displayName = 'AmauiIconMaterialDevices';

export default IconMaterialDevices;
