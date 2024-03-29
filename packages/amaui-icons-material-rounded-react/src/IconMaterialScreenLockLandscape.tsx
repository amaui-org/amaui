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
      <path d="M9.85 16q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H10v-1q0-.825.588-1.413Q11.175 8 12 8t1.413.587Q14 9.175 14 10v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25ZM11 11h2v-1q0-.425-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10Zm-8 8q-.825 0-1.412-.587Q1 17.825 1 17V7q0-.825.588-1.412Q2.175 5 3 5h18q.825 0 1.413.588Q23 6.175 23 7v10q0 .825-.587 1.413Q21.825 19 21 19Zm3-2h12V7H6Zm-2 0V7H3v10Zm16 0h1V7h-1Zm1-10h-1 1ZM3 7h1-1Z"/>
    </Icon>
  );
});

IconMaterialScreenLockLandscape.displayName = 'AmauiIconMaterialScreenLockLandscape';

export default IconMaterialScreenLockLandscape;
