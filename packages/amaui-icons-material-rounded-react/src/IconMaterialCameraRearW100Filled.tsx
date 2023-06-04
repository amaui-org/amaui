import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraRearW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRearW100Filled'

      short_name='CameraRear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.25 16.65q.125-.125.262-.125.138 0 .238.125l1.825 1.825q.225.225.225.525 0 .3-.225.525L10.75 21.35q-.1.1-.238.112-.137.013-.262-.112-.1-.125-.1-.263 0-.137.1-.237l1.5-1.5h-5.1q-.15 0-.25-.1T6.3 19q0-.15.1-.25t.25-.1h5.1l-1.5-1.5q-.1-.125-.1-.263 0-.137.1-.237Zm4.1 2h3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-3q-.15 0-.25-.1T14 19q0-.15.1-.25t.25-.1ZM7.8 3.3h8.4q.65 0 1.075.425.425.425.425 1.075v10.7q0 .625-.438 1.062Q16.825 17 16.2 17h-3.675l-.975-.975q-.425-.425-1.05-.425t-1.05.425L8.475 17H7.8q-.625 0-1.062-.438Q6.3 16.125 6.3 15.5V4.8q0-.65.425-1.075Q7.15 3.3 7.8 3.3ZM12 7.05q-.6 0-1.025.425-.425.425-.425 1.025 0 .6.425 1.025.425.425 1.025.425.6 0 1.025-.425.425-.425.425-1.025 0-.6-.425-1.025Q12.6 7.05 12 7.05Z"/>
    </Icon>
  );
});

IconMaterialCameraRearW100Filled.displayName = 'AmauiIconMaterialCameraRearW100Filled';

export default IconMaterialCameraRearW100Filled;
