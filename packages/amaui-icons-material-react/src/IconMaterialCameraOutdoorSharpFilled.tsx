import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraOutdoorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorSharpFilled'
      short_name='CameraOutdoor'

      {...props}
    >
      <path d="M12 18V12H18V14L20 12.95V17.05L18 16V18ZM4 21V9L12 3L20 9V11H11V19H20V21Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoorSharpFilled.displayName = 'AmauiIconMaterialCameraOutdoorSharpFilled';

export default IconMaterialCameraOutdoorSharpFilled;
