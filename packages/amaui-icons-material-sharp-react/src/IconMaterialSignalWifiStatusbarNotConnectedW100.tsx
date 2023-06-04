import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifiStatusbarNotConnectedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiStatusbarNotConnectedW100'

      short_name='SignalWifiStatusbarNotConnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.15 1.85 9q2.125-1.825 4.738-2.762Q9.2 5.3 12 5.3t5.413.938Q20.025 7.175 22.15 9l-.4.4q-.65-.45-1.3-.675Q19.8 8.5 19 8.5q-1.875 0-3.188 1.325Q14.5 11.15 14.5 13q0 .875.275 1.6.275.725.625 1.15Zm6.95-.35q-.225 0-.363-.137-.137-.138-.137-.363 0-.225.137-.362.138-.138.363-.138.225 0 .362.138.138.137.138.362 0 .225-.138.363-.137.137-.362.137Zm-.35-2q0-.875.225-1.362.225-.488.975-1.288.475-.475.688-.85.212-.375.212-.725 0-.55-.375-1.038-.375-.487-1.25-.487-.675 0-1.112.35-.438.35-.713.8l-.65-.3q.35-.6.975-1.075t1.5-.475q1.025 0 1.675.6.65.6.65 1.625 0 .575-.25 1-.25.425-1 1.175-.525.525-.688.925-.162.4-.162 1.125Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiStatusbarNotConnectedW100.displayName = 'AmauiIconMaterialSignalWifiStatusbarNotConnectedW100';

export default IconMaterialSignalWifiStatusbarNotConnectedW100;
