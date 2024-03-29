import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactEmergencyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencyFilled'

      short_name='ContactEmergency'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.25 12h1.5v-1.7l1.475.85.75-1.3L19.5 9l1.475-.85-.75-1.3-1.475.85V6h-1.5v1.7l-1.475-.85-.75 1.3L16.5 9l-1.475.85.75 1.3 1.475-.85ZM0 21V3h24v18Zm9-7q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm-6.9 5h13.8q-1.05-1.875-2.9-2.938Q11.15 15 9 15t-4 1.062Q3.15 17.125 2.1 19Z"/>
    </Icon>
  );
});

IconMaterialContactEmergencyFilled.displayName = 'AmauiIconMaterialContactEmergencyFilled';

export default IconMaterialContactEmergencyFilled;
