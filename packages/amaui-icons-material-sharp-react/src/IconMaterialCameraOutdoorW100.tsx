import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraOutdoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorW100'

      short_name='CameraOutdoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.9 17.5v-5h5v2.1l1.8-.95v2.7l-1.8-.95v2.1Zm-6.6 2.2V9.65L12 4.6l6.7 5.05V11H18v-1l-6-4.5L6 10v9h12.7v.7Zm6.7-7.45Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoorW100.displayName = 'AmauiIconMaterialCameraOutdoorW100';

export default IconMaterialCameraOutdoorW100;
