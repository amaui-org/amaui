import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraIndoorRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorRoundedFilled'
      short_name='CameraIndoor'

      {...props}
    >
      <path d="M9 17H13Q13.425 17 13.713 16.712Q14 16.425 14 16V15L15.275 15.675Q15.525 15.8 15.762 15.65Q16 15.5 16 15.225V12.775Q16 12.5 15.762 12.35Q15.525 12.2 15.275 12.325L14 13V12Q14 11.575 13.713 11.287Q13.425 11 13 11H9Q8.575 11 8.288 11.287Q8 11.575 8 12V16Q8 16.425 8.288 16.712Q8.575 17 9 17ZM6 21Q5.175 21 4.588 20.413Q4 19.825 4 19V10Q4 9.525 4.213 9.1Q4.425 8.675 4.8 8.4L10.8 3.9Q11.325 3.5 12 3.5Q12.675 3.5 13.2 3.9L19.2 8.4Q19.575 8.675 19.788 9.1Q20 9.525 20 10V19Q20 19.825 19.413 20.413Q18.825 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorRoundedFilled.displayName = 'AmauiIconMaterialCameraIndoorRoundedFilled';

export default IconMaterialCameraIndoorRoundedFilled;
