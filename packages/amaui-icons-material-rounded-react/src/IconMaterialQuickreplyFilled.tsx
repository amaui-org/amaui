import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickreplyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyFilled'

      short_name='Quickreply'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 18h-1q-.425 0-.712-.288Q17 17.425 17 17v-4q0-.425.288-.713Q17.575 12 18 12h2.5q.55 0 .825.45.275.45.075.95L20.3 16h.975q.425 0 .65.35.225.35.025.725l-2 4.025q-.175.35-.562.262-.388-.087-.388-.487ZM6 18l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v6h-5q-.825 0-1.412.587Q15 11.175 15 12v6Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyFilled.displayName = 'AmauiIconMaterialQuickreplyFilled';

export default IconMaterialQuickreplyFilled;
