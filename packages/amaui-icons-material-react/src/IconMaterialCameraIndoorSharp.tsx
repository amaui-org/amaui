import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraIndoorSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorSharp'
      short_name='CameraIndoor'

      {...props}
    >
      <path d="M8 17H14V15L16 16.05V11.95L14 13V11H8ZM4 21V9L12 3L20 9V21ZM6 19H18V10L12 5.5L6 10ZM12 12.25Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorSharp.displayName = 'AmauiIconMaterialCameraIndoorSharp';

export default IconMaterialCameraIndoorSharp;
