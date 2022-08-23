import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraIndoorRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorRoundedW100Filled'
      short_name='CameraIndoor'

      {...props}
    >
      <path d="M9.2 16.5H13.2Q13.425 16.5 13.562 16.35Q13.7 16.2 13.7 16V14.4L14.925 15.05Q15.125 15.175 15.312 15.037Q15.5 14.9 15.5 14.675V13.325Q15.5 13.1 15.312 12.962Q15.125 12.825 14.925 12.95L13.7 13.6V12Q13.7 11.775 13.562 11.637Q13.425 11.5 13.2 11.5H9.2Q9 11.5 8.85 11.637Q8.7 11.775 8.7 12V16Q8.7 16.2 8.85 16.35Q9 16.5 9.2 16.5ZM6.8 19.7Q6.175 19.7 5.738 19.262Q5.3 18.825 5.3 18.2V10.4Q5.3 10.05 5.463 9.725Q5.625 9.4 5.9 9.2L11.1 5.275Q11.5 4.975 12 4.975Q12.5 4.975 12.9 5.275L18.1 9.2Q18.375 9.4 18.538 9.725Q18.7 10.05 18.7 10.4V18.2Q18.7 18.825 18.262 19.262Q17.825 19.7 17.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorRoundedW100Filled.displayName = 'AmauiIconMaterialCameraIndoorRoundedW100Filled';

export default IconMaterialCameraIndoorRoundedW100Filled;
