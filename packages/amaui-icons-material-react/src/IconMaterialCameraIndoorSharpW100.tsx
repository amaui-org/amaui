import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraIndoorSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorSharpW100'
      short_name='CameraIndoor'

      {...props}
    >
      <path d="M8.7 16.5H13.7V14.4L15.5 15.35V12.65L13.7 13.6V11.5H8.7ZM5.3 19.7V9.65L12 4.6L18.7 9.65V19.7ZM6 19H18V10L12 5.5L6 10ZM12 12.25Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorSharpW100.displayName = 'AmauiIconMaterialCameraIndoorSharpW100';

export default IconMaterialCameraIndoorSharpW100;
