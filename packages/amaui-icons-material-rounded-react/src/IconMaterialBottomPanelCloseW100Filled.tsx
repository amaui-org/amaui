import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelCloseW100Filled'

      short_name='BottomPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m501 540 70.778-70.778Q579 462 575.25 452.5 571.5 443 561 443H399.118Q389 443 385 452.5t3.25 16.75l71.05 71.05Q468 549 480 549t21-9Zm227-272q24.75 0 42.375 17.625T788 328v496q0 24.75-17.625 42.375T728 884H232q-24.75 0-42.375-17.625T172 824V328q0-24.75 17.625-42.375T232 268h496Zm32 440V328q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v380h560Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelCloseW100Filled.displayName = 'AmauiIconMaterialBottomPanelCloseW100Filled';

export default IconMaterialBottomPanelCloseW100Filled;
