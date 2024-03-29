import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiveTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTv'

      short_name='LiveTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.05 14.5 4.15-2.65q.225-.15.338-.375.112-.225.112-.475 0-.25-.112-.475-.113-.225-.338-.375L11.05 7.5q-.5-.325-1.025-.05-.525.275-.525.875v5.35q0 .6.525.875t1.025-.05ZM9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Zm-5-4h16V5H4v12Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialLiveTv.displayName = 'AmauiIconMaterialLiveTv';

export default IconMaterialLiveTv;
