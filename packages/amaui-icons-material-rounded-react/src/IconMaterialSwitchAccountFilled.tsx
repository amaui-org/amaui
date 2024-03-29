import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccountFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountFilled'

      short_name='SwitchAccount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 11q1.25 0 2.125-.875T17 8q0-1.25-.875-2.125T14 5q-1.25 0-2.125.875T11 8q0 1.25.875 2.125T14 11Zm-6 7q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22Zm4-6h12q-1.1-1.475-2.65-2.238Q15.8 13 14 13t-3.35.762Q9.1 14.525 8 16Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountFilled.displayName = 'AmauiIconMaterialSwitchAccountFilled';

export default IconMaterialSwitchAccountFilled;
