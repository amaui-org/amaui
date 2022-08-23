import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenLockRotationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockRotationSharpFilled'
      short_name='ScreenLockRotation'

      {...props}
    >
      <path d="M13 22.95Q10.525 22.95 8.338 22Q6.15 21.05 4.525 19.425Q2.9 17.8 1.95 15.613Q1 13.425 1 10.95H3Q3 12.75 3.613 14.375Q4.225 16 5.3 17.3Q6.375 18.6 7.85 19.513Q9.325 20.425 11.025 20.775L8.4 18.15L9.8 16.75L15.7 22.65Q15.025 22.8 14.375 22.875Q13.725 22.95 13 22.95ZM15 9V4H16V3Q16 2.175 16.587 1.587Q17.175 1 18 1Q18.825 1 19.413 1.587Q20 2.175 20 3V4H21V9ZM17 4H19V3Q19 2.575 18.712 2.287Q18.425 2 18 2Q17.575 2 17.288 2.287Q17 2.575 17 3ZM14.75 19.75 4.2 9.2 11.25 2.15 12.35 3.25V8.15Q12.35 9.625 13.363 10.637Q14.375 11.65 15.85 11.65H20.75L21.8 12.7Z"/>
    </Icon>
  );
});

IconMaterialScreenLockRotationSharpFilled.displayName = 'AmauiIconMaterialScreenLockRotationSharpFilled';

export default IconMaterialScreenLockRotationSharpFilled;
