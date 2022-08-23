import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileScreenShareRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreenShareRounded'
      short_name='MobileScreenShare'

      {...props}
    >
      <path d="M10 15Q9.575 15 9.288 14.712Q9 14.425 9 14V13.5Q9 12.25 9.875 11.375Q10.75 10.5 12 10.5H13V9.7Q13 9.35 13.3 9.225Q13.6 9.1 13.85 9.35L15.65 11.15Q15.725 11.225 15.763 11.312Q15.8 11.4 15.8 11.5Q15.8 11.55 15.65 11.85L13.85 13.65Q13.6 13.9 13.3 13.775Q13 13.65 13 13.3V12.5H12Q11.575 12.5 11.288 12.787Q11 13.075 11 13.5V14Q11 14.425 10.713 14.712Q10.425 15 10 15ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7ZM7 20V21Q7 21 7 21Q7 21 7 21H17Q17 21 17 21Q17 21 17 21V20ZM7 4H17V3Q17 3 17 3Q17 3 17 3H7Q7 3 7 3Q7 3 7 3ZM7 3Q7 3 7 3Q7 3 7 3V4V3Q7 3 7 3Q7 3 7 3ZM7 21Q7 21 7 21Q7 21 7 21V20V21Q7 21 7 21Q7 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialMobileScreenShareRounded.displayName = 'AmauiIconMaterialMobileScreenShareRounded';

export default IconMaterialMobileScreenShareRounded;
