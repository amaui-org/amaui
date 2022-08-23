import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraRearSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRearSharpW100'
      short_name='CameraRear'

      {...props}
    >
      <path d="M6.3 17V3.3H17.7V17H17V4H7V17ZM12 9.95Q12.6 9.95 13.025 9.525Q13.45 9.1 13.45 8.5Q13.45 7.9 13.025 7.475Q12.6 7.05 12 7.05Q11.4 7.05 10.975 7.475Q10.55 7.9 10.55 8.5Q10.55 9.1 10.975 9.525Q11.4 9.95 12 9.95ZM10.5 21.6 10 21.1 11.75 19.35H6.3V18.65H11.75L10 16.9L10.5 16.4L13.1 19ZM14 19.35V18.65H17.7V19.35ZM12 10.5Z"/>
    </Icon>
  );
});

IconMaterialCameraRearSharpW100.displayName = 'AmauiIconMaterialCameraRearSharpW100';

export default IconMaterialCameraRearSharpW100;
