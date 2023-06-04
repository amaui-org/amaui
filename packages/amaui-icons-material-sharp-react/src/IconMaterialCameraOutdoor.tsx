import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraOutdoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoor'

      short_name='CameraOutdoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18v-6h6v2l2-1.05v4.1L18 16v2Zm-8 3V9l8-6 8 6v2h-2v-1l-6-4.5L6 10v9h14v2Zm8-8.75Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoor.displayName = 'AmauiIconMaterialCameraOutdoor';

export default IconMaterialCameraOutdoor;
