import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenLockLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockLandscape'

      short_name='ScreenLockLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16v-5h1v-1q0-.825.588-1.413Q11.175 8 12 8t1.413.587Q14 9.175 14 10v1h1v5Zm2-5h2v-1q0-.425-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10ZM1 19V5h22v14Zm5-2h12V7H6Zm-3 0h1V7H3Zm17 0h1V7h-1ZM3 7h1Zm17 0h1Z"/>
    </Icon>
  );
});

IconMaterialScreenLockLandscape.displayName = 'AmauiIconMaterialScreenLockLandscape';

export default IconMaterialScreenLockLandscape;
