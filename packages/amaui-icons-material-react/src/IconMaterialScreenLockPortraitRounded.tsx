import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenLockPortraitRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockPortraitRounded'
      short_name='ScreenLockPortrait'

      {...props}
    >
      <path d="M9.85 16Q9.5 16 9.25 15.75Q9 15.5 9 15.15V11.85Q9 11.5 9.25 11.25Q9.5 11 9.85 11H10V10Q10 9.175 10.588 8.587Q11.175 8 12 8Q12.825 8 13.413 8.587Q14 9.175 14 10V11H14.15Q14.5 11 14.75 11.25Q15 11.5 15 11.85V15.15Q15 15.5 14.75 15.75Q14.5 16 14.15 16ZM11 11H13V10Q13 9.575 12.713 9.287Q12.425 9 12 9Q11.575 9 11.288 9.287Q11 9.575 11 10ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7ZM7 20V21Q7 21 7 21Q7 21 7 21H17Q17 21 17 21Q17 21 17 21V20ZM7 4H17V3Q17 3 17 3Q17 3 17 3H7Q7 3 7 3Q7 3 7 3ZM7 3Q7 3 7 3Q7 3 7 3V4V3Q7 3 7 3Q7 3 7 3ZM7 21Q7 21 7 21Q7 21 7 21V20V21Q7 21 7 21Q7 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialScreenLockPortraitRounded.displayName = 'AmauiIconMaterialScreenLockPortraitRounded';

export default IconMaterialScreenLockPortraitRounded;
