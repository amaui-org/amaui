import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenLockPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockPortraitFilled'

      short_name='ScreenLockPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.85 16q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H10v-1q0-.825.588-1.413Q11.175 8 12 8t1.413.587Q14 9.175 14 10v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25ZM11 11h2v-1q0-.425-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10Zm-4 7h10V6H7Zm0 5q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Z"/>
    </Icon>
  );
});

IconMaterialScreenLockPortraitFilled.displayName = 'AmauiIconMaterialScreenLockPortraitFilled';

export default IconMaterialScreenLockPortraitFilled;
