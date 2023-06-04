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
      <path d="M10.75 21.35q-.1.1-.238.112-.137.013-.262-.112-.1-.125-.1-.263 0-.137.1-.237l1.5-1.5h-5.1q-.15 0-.25-.1T6.3 19q0-.15.1-.25t.25-.1h5.1l-1.5-1.5q-.1-.125-.1-.263 0-.137.1-.237.125-.125.262-.125.138 0 .238.125l1.825 1.825q.225.225.225.525 0 .3-.225.525Zm3.6-2q-.15 0-.25-.1T14 19q0-.15.1-.25t.25-.1h3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM12.525 17l-.975-.975q-.425-.425-1.05-.425t-1.05.425L8.475 17H7.8q-.625 0-1.062-.438Q6.3 16.125 6.3 15.5V4.8q0-.65.425-1.075Q7.15 3.3 7.8 3.3h8.4q.65 0 1.075.425.425.425.425 1.075v10.7q0 .625-.438 1.062Q16.825 17 16.2 17ZM7 13.85q1.1-.5 2.475-.825Q10.85 12.7 12 12.7t2.525.325q1.375.325 2.475.825V4.8q0-.35-.225-.575Q16.55 4 16.2 4H7.8q-.35 0-.575.225Q7 4.45 7 4.8Zm5-2.9q-.975 0-1.662-.688Q9.65 9.575 9.65 8.6q0-.975.688-1.662.687-.688 1.662-.688.975 0 1.663.688.687.687.687 1.662 0 .975-.687 1.662-.688.688-1.663.688Z"/>
    </Icon>
  );
});

IconMaterialCameraFrontW100Filled.displayName = 'AmauiIconMaterialCameraFrontW100Filled';

export default IconMaterialCameraFrontW100Filled;
