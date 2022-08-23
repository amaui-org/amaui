import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToDriveRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToDriveRoundedW100Filled'
      short_name='AddToDrive'

      {...props}
    >
      <path d="M16.825 19.2V16.8H14.425V15.2H16.825V12.8H18.425V15.2H20.825V16.8H18.425V19.2ZM7 19.6Q6.575 19.6 6.2 19.375Q5.825 19.15 5.625 18.8L3.725 15.525Q3.525 15.175 3.525 14.725Q3.525 14.275 3.725 13.925L8.775 5.2Q9 4.8 9.363 4.6Q9.725 4.4 10.15 4.4H13.9Q14.325 4.4 14.7 4.6Q15.075 4.8 15.3 5.2L18.85 11.35Q18.55 11.25 18.25 11.225Q17.95 11.2 17.6 11.2Q17.4 11.2 17.263 11.2Q17.125 11.2 16.925 11.25L13.875 6H10.15L5.1 14.725L7.025 18H13.275Q13.475 18.45 13.775 18.85Q14.075 19.25 14.475 19.6ZM8.2 16 7.625 14.975 11.3 8.6H12.75L14.775 12.125Q14.425 12.4 14.15 12.7Q13.875 13 13.625 13.35L12.025 10.55L9.825 14.4H13.1Q12.95 14.8 12.888 15.188Q12.825 15.575 12.825 16Z"/>
    </Icon>
  );
});

IconMaterialAddToDriveRoundedW100Filled.displayName = 'AmauiIconMaterialAddToDriveRoundedW100Filled';

export default IconMaterialAddToDriveRoundedW100Filled;
