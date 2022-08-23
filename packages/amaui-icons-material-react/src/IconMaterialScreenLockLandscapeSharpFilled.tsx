import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenLockLandscapeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockLandscapeSharpFilled'
      short_name='ScreenLockLandscape'

      {...props}
    >
      <path d="M9 16V11H10V10Q10 9.175 10.588 8.587Q11.175 8 12 8Q12.825 8 13.413 8.587Q14 9.175 14 10V11H15V16ZM11 11H13V10Q13 9.575 12.713 9.287Q12.425 9 12 9Q11.575 9 11.288 9.287Q11 9.575 11 10ZM1 19V5H23V19ZM6 17H18V7H6Z"/>
    </Icon>
  );
});

IconMaterialScreenLockLandscapeSharpFilled.displayName = 'AmauiIconMaterialScreenLockLandscapeSharpFilled';

export default IconMaterialScreenLockLandscapeSharpFilled;
