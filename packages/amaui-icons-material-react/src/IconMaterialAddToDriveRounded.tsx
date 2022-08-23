import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToDriveRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToDriveRounded'
      short_name='AddToDrive'

      {...props}
    >
      <path d="M18 21V18H15V16H18V13H20V16H23V18H20V21ZM5.625 21.5Q5.1 21.5 4.65 21.225Q4.2 20.95 3.925 20.5L1.575 16.4Q1.3 15.95 1.3 15.4Q1.3 14.85 1.575 14.4L7.925 3.5Q8.2 3 8.663 2.75Q9.125 2.5 9.65 2.5H14.35Q14.875 2.5 15.338 2.75Q15.8 3 16.075 3.5L20.55 11.175Q20.175 11.05 19.8 11.012Q19.425 10.975 19 10.975Q18.775 10.975 18.575 10.975Q18.375 10.975 18.15 11.025L14.35 4.5H9.65L3.3 15.4L5.65 19.5H13.55Q13.825 20.075 14.188 20.575Q14.55 21.075 15.05 21.5ZM7.25 17 6.525 15.725 11.1 7.75H12.9L15.425 12.15Q14.975 12.5 14.638 12.863Q14.3 13.225 14 13.675L12 10.2L9.25 15H13.35Q13.15 15.5 13.075 15.988Q13 16.475 13 17Z"/>
    </Icon>
  );
});

IconMaterialAddToDriveRounded.displayName = 'AmauiIconMaterialAddToDriveRounded';

export default IconMaterialAddToDriveRounded;
