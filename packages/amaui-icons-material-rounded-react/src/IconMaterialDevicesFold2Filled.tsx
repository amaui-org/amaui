import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFold2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFold2Filled'

      short_name='DevicesFold2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120H280q-33 0-56.5-23.5T200-200v-560q0-33 23.5-56.5T280-840h424q25 0 45 13.5t29 36.5l96 240q16 40-7.5 75T800-440h-40v240q0 33-23.5 56.5T680-120Zm0-80v-240H376q-25 0-45-13.5T302-490l-22-55v345h400Z"/>
    </Icon>
  );
});

IconMaterialDevicesFold2Filled.displayName = 'AmauiIconMaterialDevicesFold2Filled';

export default IconMaterialDevicesFold2Filled;
