import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelCloseW100Filled'

      short_name='TopPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m459 612-70.778 70.778Q381 690 384.75 699.5 388.5 709 399 709h161.882Q571 709 575 699.5t-3.25-16.75L500.7 611.7Q492 603 480 603t-21 9ZM232 884q-24.75 0-42.375-17.625T172 824V328q0-24.75 17.625-42.375T232 268h496q24.75 0 42.375 17.625T788 328v496q0 24.75-17.625 42.375T728 884H232Zm-32-440v380q0 12 10 22t22 10h496q12 0 22-10t10-22V444H200Z"/>
    </Icon>
  );
});

IconMaterialTopPanelCloseW100Filled.displayName = 'AmauiIconMaterialTopPanelCloseW100Filled';

export default IconMaterialTopPanelCloseW100Filled;
