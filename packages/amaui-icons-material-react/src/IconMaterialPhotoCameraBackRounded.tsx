import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraBackRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBackRounded'
      short_name='PhotoCameraBack'

      {...props}
    >
      <path d="M7 17H17Q17.3 17 17.45 16.725Q17.6 16.45 17.4 16.2L14.65 12.525Q14.5 12.325 14.25 12.325Q14 12.325 13.85 12.525L11.25 16L9.4 13.525Q9.25 13.325 9 13.325Q8.75 13.325 8.6 13.525L6.6 16.2Q6.4 16.45 6.55 16.725Q6.7 17 7 17ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L8.4 3.65Q8.675 3.325 9.062 3.162Q9.45 3 9.875 3H14.125Q14.55 3 14.938 3.162Q15.325 3.325 15.6 3.65L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM20 19Q20 19 20 19Q20 19 20 19V7Q20 7 20 7Q20 7 20 7H4Q4 7 4 7Q4 7 4 7V19Q4 19 4 19Q4 19 4 19ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraBackRounded.displayName = 'AmauiIconMaterialPhotoCameraBackRounded';

export default IconMaterialPhotoCameraBackRounded;
