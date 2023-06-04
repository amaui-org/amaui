import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraIndoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorW100Filled'

      short_name='CameraIndoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.7 16.5h5v-2.1l1.8.95v-2.7l-1.8.95v-2.1h-5Zm-3.4 3.2V9.65L12 4.6l6.7 5.05V19.7Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorW100Filled.displayName = 'AmauiIconMaterialCameraIndoorW100Filled';

export default IconMaterialCameraIndoorW100Filled;
