import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraFrontSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFrontSharpW100Filled'
      short_name='CameraFront'

      {...props}
    >
      <path d="M10.5 21.6 10 21.1 11.75 19.35H6.3V18.65H11.75L10 16.9L10.5 16.4L13.1 19ZM14 19.35V18.65H17.7V19.35ZM6.3 17V3.3H17.7V17H12.525L10.5 14.975L8.475 17ZM7 13.85Q8.1 13.35 9.475 13.025Q10.85 12.7 12 12.7Q13.15 12.7 14.525 13.025Q15.9 13.35 17 13.85V4H7ZM12 10.95Q11.025 10.95 10.338 10.262Q9.65 9.575 9.65 8.6Q9.65 7.625 10.338 6.938Q11.025 6.25 12 6.25Q12.975 6.25 13.663 6.938Q14.35 7.625 14.35 8.6Q14.35 9.575 13.663 10.262Q12.975 10.95 12 10.95Z"/>
    </Icon>
  );
});

IconMaterialCameraFrontSharpW100Filled.displayName = 'AmauiIconMaterialCameraFrontSharpW100Filled';

export default IconMaterialCameraFrontSharpW100Filled;
