import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraOutdoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorW100Filled'

      short_name='CameraOutdoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.9 17.5v-5h5v2.1l1.8-.95v2.7l-1.8-.95v2.1Zm-6.6 2.2V9.65L12 4.6l6.7 5.05V11h-8.3v8h8.3v.7Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoorW100Filled.displayName = 'AmauiIconMaterialCameraOutdoorW100Filled';

export default IconMaterialCameraOutdoorW100Filled;
