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
      <path d="M14 11q1.25 0 2.125-.875T17 8q0-1.25-.875-2.125T14 5q-1.25 0-2.125.875T11 8q0 1.25.875 2.125T14 11Zm-8 7V2h16v16Zm-4 4V6h2v14h14v2Zm6-6h12q-1.1-1.475-2.65-2.238Q15.8 13 14 13t-3.35.762Q9.1 14.525 8 16Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountFilled.displayName = 'AmauiIconMaterialSwitchAccountFilled';

export default IconMaterialSwitchAccountFilled;
