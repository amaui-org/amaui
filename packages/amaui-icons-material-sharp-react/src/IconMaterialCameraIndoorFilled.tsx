import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraIndoorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorFilled'

      short_name='CameraIndoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17h6v-2l2 1.05v-4.1L14 13v-2H8Zm-4 4V9l8-6 8 6v12Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorFilled.displayName = 'AmauiIconMaterialCameraIndoorFilled';

export default IconMaterialCameraIndoorFilled;
