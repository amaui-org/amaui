import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraFrontSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFrontSharp'
      short_name='CameraFront'

      {...props}
    >
      <path d="M9.85 22.5 8.45 21.1 9.55 20H5V18H9.55L8.45 16.9L9.85 15.5L13.35 19ZM5 17V2H19V17H17V14.95Q16 14.225 14.738 13.863Q13.475 13.5 12 13.5Q10.525 13.5 9.262 13.863Q8 14.225 7 14.95V16.925L6.925 17ZM7 13.15Q8.2 12.575 9.463 12.287Q10.725 12 12 12Q13.275 12 14.538 12.287Q15.8 12.575 17 13.15V4H7ZM14 20V18H19V20ZM12 11Q10.75 11 9.875 10.125Q9 9.25 9 8Q9 6.75 9.875 5.875Q10.75 5 12 5Q13.25 5 14.125 5.875Q15 6.75 15 8Q15 9.25 14.125 10.125Q13.25 11 12 11ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9ZM12 13.5Q12 13.5 12 13.5Q12 13.5 12 13.5Q12 13.5 12 13.5Q12 13.5 12 13.5ZM12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Z"/>
    </Icon>
  );
});

IconMaterialCameraFrontSharp.displayName = 'AmauiIconMaterialCameraFrontSharp';

export default IconMaterialCameraFrontSharp;
