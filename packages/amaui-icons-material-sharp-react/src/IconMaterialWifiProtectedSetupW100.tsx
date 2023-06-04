import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiProtectedSetupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProtectedSetupW100'

      short_name='WifiProtectedSetup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.325 18.15q.4-.75.613-1.575.212-.825.212-1.725 0-1.8-.8-3.325-.8-1.525-2.15-2.55L11.075 11.1V3.8h7.3L16.3 5.875q1.2 1.075 1.9 2.563.7 1.487.7 3.212 0 2.05-.975 3.75-.975 1.7-2.6 2.75Zm-9.7 2.05 2.1-2.075q-1.2-1.075-1.9-2.563-.7-1.487-.7-3.212 0-2.05.975-3.75.975-1.7 2.575-2.75-.4.75-.6 1.575-.2.825-.2 1.725 0 1.8.788 3.325Q9.45 14 10.8 15.025l2.1-2.125v7.3Z"/>
    </Icon>
  );
});

IconMaterialWifiProtectedSetupW100.displayName = 'AmauiIconMaterialWifiProtectedSetupW100';

export default IconMaterialWifiProtectedSetupW100;
