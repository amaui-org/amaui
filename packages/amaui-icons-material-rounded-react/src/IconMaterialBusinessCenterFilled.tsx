import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterFilled'

      short_name='BusinessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 13V8q0-.825.588-1.412Q3.175 6 4 6h4V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v2h4q.825 0 1.413.588Q22 7.175 22 8v5h-7v-1q0-.425-.287-.713Q14.425 11 14 11h-4q-.425 0-.712.287Q9 11.575 9 12v1Zm8-7h4V4h-4Zm1 9v-2h2v2Zm-7 6q-.825 0-1.412-.587Q2 19.825 2 19v-4h7v1q0 .425.288.712Q9.575 17 10 17h4q.425 0 .713-.288Q15 16.425 15 16v-1h7v4q0 .825-.587 1.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterFilled.displayName = 'AmauiIconMaterialBusinessCenterFilled';

export default IconMaterialBusinessCenterFilled;
