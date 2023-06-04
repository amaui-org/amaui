import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFrontFilled'

      short_name='CameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.85 22.5-1.4-1.4 1.1-1.1H5v-2h4.55l-1.1-1.1 1.4-1.4 3.5 3.5ZM14 20v-2h5v2Zm-9-3V2h14v15h-6.225L9.85 14.075 6.925 17Zm2-3.85q1.2-.575 2.463-.863Q10.725 12 12 12t2.538.287q1.262.288 2.462.863V4H7ZM12 11q-1.25 0-2.125-.875T9 8q0-1.25.875-2.125T12 5q1.25 0 2.125.875T15 8q0 1.25-.875 2.125T12 11Z"/>
    </Icon>
  );
});

IconMaterialCameraFrontFilled.displayName = 'AmauiIconMaterialCameraFrontFilled';

export default IconMaterialCameraFrontFilled;
