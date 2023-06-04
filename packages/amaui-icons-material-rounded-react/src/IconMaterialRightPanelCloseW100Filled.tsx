import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelCloseW100Filled'

      short_name='RightPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M347 656.882Q347 667 356.5 671t16.75-3.25l71.05-71.05Q453 588 453 576t-9-21l-70.778-70.778Q366 477 356.5 480.75 347 484.5 347 495v161.882ZM232 884q-24.75 0-42.375-17.625T172 824V328q0-24.75 17.625-42.375T232 268h496q24.75 0 42.375 17.625T788 328v496q0 24.75-17.625 42.375T728 884H232Zm380-28V296H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h380Z"/>
    </Icon>
  );
});

IconMaterialRightPanelCloseW100Filled.displayName = 'AmauiIconMaterialRightPanelCloseW100Filled';

export default IconMaterialRightPanelCloseW100Filled;
