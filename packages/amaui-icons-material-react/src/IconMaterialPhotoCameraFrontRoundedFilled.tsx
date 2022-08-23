import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraFrontRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraFrontRoundedFilled'
      short_name='PhotoCameraFront'

      {...props}
    >
      <path d="M8 17H16V16.45Q16 15.325 14.9 14.662Q13.8 14 12 14Q10.2 14 9.1 14.662Q8 15.325 8 16.45ZM12 13Q12.825 13 13.413 12.412Q14 11.825 14 11Q14 10.175 13.413 9.587Q12.825 9 12 9Q11.175 9 10.588 9.587Q10 10.175 10 11Q10 11.825 10.588 12.412Q11.175 13 12 13ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L8.4 3.65Q8.675 3.325 9.062 3.162Q9.45 3 9.875 3H14.125Q14.55 3 14.938 3.162Q15.325 3.325 15.6 3.65L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraFrontRoundedFilled.displayName = 'AmauiIconMaterialPhotoCameraFrontRoundedFilled';

export default IconMaterialPhotoCameraFrontRoundedFilled;
