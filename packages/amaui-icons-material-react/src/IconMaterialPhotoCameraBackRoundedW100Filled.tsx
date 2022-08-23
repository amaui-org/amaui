import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraBackRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBackRoundedW100Filled'
      short_name='PhotoCameraBack'

      {...props}
    >
      <path d="M8.75 16.35H15.45Q15.725 16.35 15.825 16.125Q15.925 15.9 15.775 15.7L14 13.35Q13.875 13.2 13.688 13.2Q13.5 13.2 13.375 13.35L11.2 16.05L9.925 14.575Q9.8 14.425 9.613 14.425Q9.425 14.425 9.3 14.6L8.45 15.7Q8.3 15.9 8.4 16.125Q8.5 16.35 8.75 16.35ZM4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H7.7L9.1 4.775Q9.325 4.55 9.613 4.425Q9.9 4.3 10.2 4.3H13.8Q14.1 4.3 14.388 4.425Q14.675 4.55 14.9 4.775L16.3 6.3H19.2Q19.85 6.3 20.275 6.725Q20.7 7.15 20.7 7.8V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraBackRoundedW100Filled.displayName = 'AmauiIconMaterialPhotoCameraBackRoundedW100Filled';

export default IconMaterialPhotoCameraBackRoundedW100Filled;
