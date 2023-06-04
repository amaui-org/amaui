import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraFrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFrontW100Filled'

      short_name='CameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.5 21.6-.5-.5 1.75-1.75H6.3v-.7h5.45L10 16.9l.5-.5 2.6 2.6Zm3.5-2.25v-.7h3.7v.7ZM6.3 17V3.3h11.4V17h-5.175L10.5 14.975 8.475 17Zm.7-3.15q1.1-.5 2.475-.825Q10.85 12.7 12 12.7t2.525.325q1.375.325 2.475.825V4H7Zm5-2.9q-.975 0-1.662-.688Q9.65 9.575 9.65 8.6q0-.975.688-1.662.687-.688 1.662-.688.975 0 1.663.688.687.687.687 1.662 0 .975-.687 1.662-.688.688-1.663.688Z"/>
    </Icon>
  );
});

IconMaterialCameraFrontW100Filled.displayName = 'AmauiIconMaterialCameraFrontW100Filled';

export default IconMaterialCameraFrontW100Filled;
