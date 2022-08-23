import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraEnhanceRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraEnhanceRoundedFilled'
      short_name='CameraEnhance'

      {...props}
    >
      <path d="M12 17.5Q13.875 17.5 15.188 16.188Q16.5 14.875 16.5 13Q16.5 11.125 15.188 9.812Q13.875 8.5 12 8.5Q10.125 8.5 8.812 9.812Q7.5 11.125 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5ZM10.9 11.9 11.55 10.5Q11.675 10.2 12 10.2Q12.325 10.2 12.45 10.5L13.1 11.9L14.5 12.55Q14.8 12.675 14.8 13Q14.8 13.325 14.5 13.45L13.1 14.1L12.45 15.5Q12.325 15.8 12 15.8Q11.675 15.8 11.55 15.5L10.9 14.1L9.5 13.45Q9.2 13.325 9.2 13Q9.2 12.675 9.5 12.55ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L8.4 3.65Q8.675 3.325 9.062 3.162Q9.45 3 9.875 3H14.125Q14.55 3 14.938 3.162Q15.325 3.325 15.6 3.65L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialCameraEnhanceRoundedFilled.displayName = 'AmauiIconMaterialCameraEnhanceRoundedFilled';

export default IconMaterialCameraEnhanceRoundedFilled;
