import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontRounded'
      short_name='VideoCameraFront'

      {...props}
    >
      <path d="M6 16H14V15.45Q14 13.975 12.588 13.488Q11.175 13 10 13Q8.825 13 7.413 13.488Q6 13.975 6 15.45ZM10 12Q10.825 12 11.413 11.412Q12 10.825 12 10Q12 9.175 11.413 8.587Q10.825 8 10 8Q9.175 8 8.588 8.587Q8 9.175 8 10Q8 10.825 8.588 11.412Q9.175 12 10 12ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L21.15 7.35Q21.375 7.125 21.688 7.237Q22 7.35 22 7.7V16.3Q22 16.65 21.688 16.762Q21.375 16.875 21.15 16.65L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20ZM4 18H16Q16 18 16 18Q16 18 16 18V6Q16 6 16 6Q16 6 16 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontRounded.displayName = 'AmauiIconMaterialVideoCameraFrontRounded';

export default IconMaterialVideoCameraFrontRounded;
