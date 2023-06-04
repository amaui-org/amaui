import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraIndoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoor'

      short_name='CameraIndoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17h6v-2l2 1.05v-4.1L14 13v-2H8Zm-4 4V9l8-6 8 6v12Zm2-2h12v-9l-6-4.5L6 10Zm6-6.75Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoor.displayName = 'AmauiIconMaterialCameraIndoor';

export default IconMaterialCameraIndoor;
