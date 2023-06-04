import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneForwardedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneForwardedW100Filled'

      short_name='PhoneForwarded'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.45 9.05q-.125-.125-.125-.25t.125-.25l2-2H13.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.75l-2-2q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l2.325 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L17.95 9.05q-.1.1-.238.112-.137.013-.262-.112Zm1.15 10.5q-2.425 0-4.962-1.3-2.538-1.3-4.6-3.363-2.063-2.062-3.375-4.587Q4.35 7.775 4.35 5.35q0-.45.3-.75t.75-.3h2q.45 0 .762.262.313.263.413.688l.45 2.05q.075.4-.013.725-.087.325-.362.55L6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.05-2.15q.275-.275.563-.363.287-.087.637-.012l1.7.35q.425.1.688.413.262.312.262.762v1.95q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialPhoneForwardedW100Filled.displayName = 'AmauiIconMaterialPhoneForwardedW100Filled';

export default IconMaterialPhoneForwardedW100Filled;
