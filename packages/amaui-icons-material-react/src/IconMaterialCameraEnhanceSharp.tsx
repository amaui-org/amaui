import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraEnhanceSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraEnhanceSharp'
      short_name='CameraEnhance'

      {...props}
    >
      <path d="M12 17.5Q13.875 17.5 15.188 16.188Q16.5 14.875 16.5 13Q16.5 11.125 15.188 9.812Q13.875 8.5 12 8.5Q10.125 8.5 8.812 9.812Q7.5 11.125 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5ZM12 16.5 10.9 14.1 8.5 13 10.9 11.9 12 9.5 13.1 11.9 15.5 13 13.1 14.1ZM2 21V5H7.15L9 3H15L16.85 5H22V21ZM4 19H20V7H4ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialCameraEnhanceSharp.displayName = 'AmauiIconMaterialCameraEnhanceSharp';

export default IconMaterialCameraEnhanceSharp;
