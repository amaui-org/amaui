import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraIndoorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorSharpFilled'
      short_name='CameraIndoor'

      {...props}
    >
      <path d="M8 17H14V15L16 16.05V11.95L14 13V11H8ZM4 21V9L12 3L20 9V21Z"/>
    </Icon>
  );
});

export default IconMaterialCameraIndoorSharpFilled;
