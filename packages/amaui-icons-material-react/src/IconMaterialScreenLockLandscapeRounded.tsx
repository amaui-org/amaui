import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenLockLandscapeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockLandscapeRounded'
      short_name='ScreenLockLandscape'

      {...props}
    >
      <path d="M9.85 16Q9.5 16 9.25 15.75Q9 15.5 9 15.15V11.85Q9 11.5 9.25 11.25Q9.5 11 9.85 11H10V10Q10 9.175 10.588 8.587Q11.175 8 12 8Q12.825 8 13.413 8.587Q14 9.175 14 10V11H14.15Q14.5 11 14.75 11.25Q15 11.5 15 11.85V15.15Q15 15.5 14.75 15.75Q14.5 16 14.15 16ZM11 11H13V10Q13 9.575 12.713 9.287Q12.425 9 12 9Q11.575 9 11.288 9.287Q11 9.575 11 10ZM3 19Q2.175 19 1.588 18.413Q1 17.825 1 17V7Q1 6.175 1.588 5.588Q2.175 5 3 5H21Q21.825 5 22.413 5.588Q23 6.175 23 7V17Q23 17.825 22.413 18.413Q21.825 19 21 19ZM6 17H18V7H6ZM4 17V7H3Q3 7 3 7Q3 7 3 7V17Q3 17 3 17Q3 17 3 17ZM20 17H21Q21 17 21 17Q21 17 21 17V7Q21 7 21 7Q21 7 21 7H20ZM21 7Q21 7 21 7Q21 7 21 7H20H21Q21 7 21 7Q21 7 21 7ZM3 7Q3 7 3 7Q3 7 3 7H4H3Q3 7 3 7Q3 7 3 7Z"/>
    </Icon>
  );
});

IconMaterialScreenLockLandscapeRounded.displayName = 'AmauiIconMaterialScreenLockLandscapeRounded';

export default IconMaterialScreenLockLandscapeRounded;
