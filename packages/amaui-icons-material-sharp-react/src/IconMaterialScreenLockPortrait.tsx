import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenLockPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockPortrait'

      short_name='ScreenLockPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16v-5h1v-1q0-.825.588-1.413Q11.175 8 12 8t1.413.587Q14 9.175 14 10v1h1v5Zm2-5h2v-1q0-.425-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10ZM5 23V1h14v22Zm2-5h10V6H7Zm0 3h10v-1H7ZM7 4h10V3H7Zm0 0V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialScreenLockPortrait.displayName = 'AmauiIconMaterialScreenLockPortrait';

export default IconMaterialScreenLockPortrait;
