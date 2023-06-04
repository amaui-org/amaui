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
      <path d="m10.5 21.6-.5-.5 1.75-1.75H6.3v-.7h5.45L10 16.9l.5-.5 2.6 2.6Zm3.5-2.25v-.7h3.7v.7ZM6.3 17V3.3h11.4V17h-5.175L10.5 14.975 8.475 17ZM12 9.95q.6 0 1.025-.425.425-.425.425-1.025 0-.6-.425-1.025Q12.6 7.05 12 7.05q-.6 0-1.025.425-.425.425-.425 1.025 0 .6.425 1.025.425.425 1.025.425Z"/>
    </Icon>
  );
});

IconMaterialCameraRearW100Filled.displayName = 'AmauiIconMaterialCameraRearW100Filled';

export default IconMaterialCameraRearW100Filled;
