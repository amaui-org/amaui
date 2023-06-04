import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelCloseW100Filled'

      short_name='LeftPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M613 657V495.118Q613 485 603.5 481t-16.75 3.25L515.7 555.3Q507 564 507 576t9 21l70.778 70.778Q594 675 603.5 671.25 613 667.5 613 657ZM232 884q-24.75 0-42.375-17.625T172 824V328q0-24.75 17.625-42.375T232 268h496q24.75 0 42.375 17.625T788 328v496q0 24.75-17.625 42.375T728 884H232Zm116-28h380q12 0 22-10t10-22V328q0-12-10-22t-22-10H348v560Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelCloseW100Filled.displayName = 'AmauiIconMaterialLeftPanelCloseW100Filled';

export default IconMaterialLeftPanelCloseW100Filled;
