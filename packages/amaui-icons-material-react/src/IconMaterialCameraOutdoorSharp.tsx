import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraOutdoorSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorSharp'
      short_name='CameraOutdoor'

      {...props}
    >
      <path d="M12 18V12H18V14L20 12.95V17.05L18 16V18ZM4 21V9L12 3L20 9V11H18V10L12 5.5L6 10V19H20V21ZM12 12.25Z"/>
    </Icon>
  )
});

export default IconMaterialCameraOutdoorSharp;
