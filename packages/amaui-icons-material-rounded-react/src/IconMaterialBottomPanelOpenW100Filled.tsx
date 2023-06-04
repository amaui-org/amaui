import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelOpenW100Filled'

      short_name='BottomPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M399 561h161.882Q571 561 575 551.5t-3.25-16.75L500.7 463.7Q492 455 480 455t-21 9l-70.778 70.778Q381 542 384.75 551.5 388.5 561 399 561ZM232 884q-24.75 0-42.375-17.625T172 824V328q0-24.75 17.625-42.375T232 268h496q24.75 0 42.375 17.625T788 328v496q0 24.75-17.625 42.375T728 884H232Zm-32-176h560V328q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v380Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelOpenW100Filled.displayName = 'AmauiIconMaterialBottomPanelOpenW100Filled';

export default IconMaterialBottomPanelOpenW100Filled;
