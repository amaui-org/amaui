import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCallW100Filled'

      short_name='AddCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.3 11q-.15 0-.25-.1t-.1-.25V8H13.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V7.3h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65v2.65q0 .15-.1.25t-.25.1Zm2.3 8.55q-2.425 0-4.962-1.3-2.538-1.3-4.6-3.363-2.063-2.062-3.375-4.587Q4.35 7.775 4.35 5.35q0-.45.3-.75t.75-.3h2q.45 0 .762.262.313.263.413.688l.45 2.05q.075.4-.013.725-.087.325-.362.55L6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.05-2.15q.275-.275.563-.363.287-.087.637-.012l1.7.35q.425.1.688.413.262.312.262.762v1.95q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialAddCallW100Filled.displayName = 'AmauiIconMaterialAddCallW100Filled';

export default IconMaterialAddCallW100Filled;
