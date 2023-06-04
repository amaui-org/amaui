import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelOpenW100Filled'

      short_name='RightPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M465 657V495.118Q465 485 455.5 481t-16.75 3.25L367.7 555.3Q359 564 359 576t9 21l70.778 70.778Q446 675 455.5 671.25 465 667.5 465 657ZM232 884q-24.75 0-42.375-17.625T172 824V328q0-24.75 17.625-42.375T232 268h496q24.75 0 42.375 17.625T788 328v496q0 24.75-17.625 42.375T728 884H232Zm380-28V296H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h380Z"/>
    </Icon>
  );
});

IconMaterialRightPanelOpenW100Filled.displayName = 'AmauiIconMaterialRightPanelOpenW100Filled';

export default IconMaterialRightPanelOpenW100Filled;
