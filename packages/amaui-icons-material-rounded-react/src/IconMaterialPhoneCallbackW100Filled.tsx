import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneCallbackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneCallbackW100Filled'

      short_name='PhoneCallback'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 11.25q-.325 0-.537-.213-.213-.212-.213-.537V6.9q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.15l5.35-5.35q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25l-5.35 5.35h3.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm4.95 8.3q-2.425 0-4.962-1.3-2.538-1.3-4.6-3.363-2.063-2.062-3.375-4.587Q4.35 7.775 4.35 5.35q0-.45.3-.75t.75-.3h2q.45 0 .762.262.313.263.413.688l.45 2.05q.075.4-.013.725-.087.325-.362.55L6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.05-2.15q.275-.275.563-.363.287-.087.637-.012l1.7.35q.425.1.688.413.262.312.262.762v1.95q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialPhoneCallbackW100Filled.displayName = 'AmauiIconMaterialPhoneCallbackW100Filled';

export default IconMaterialPhoneCallbackW100Filled;
