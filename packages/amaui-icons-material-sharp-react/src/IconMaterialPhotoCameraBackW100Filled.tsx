import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoCameraBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBackW100Filled'

      short_name='PhotoCameraBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.95 16.35h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM3.3 19.7V6.3h4.4l1.85-2h4.9l1.85 2h4.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraBackW100Filled.displayName = 'AmauiIconMaterialPhotoCameraBackW100Filled';

export default IconMaterialPhotoCameraBackW100Filled;
