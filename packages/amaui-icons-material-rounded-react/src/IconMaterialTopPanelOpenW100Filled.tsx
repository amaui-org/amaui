import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelOpenW100Filled'

      short_name='TopPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m501 688 70.778-70.778Q579 610 575.25 600.5 571.5 591 561 591H399.118Q389 591 385 600.5t3.25 16.75l71.05 71.05Q468 697 480 697t21-9ZM232 884q-24.75 0-42.375-17.625T172 824V328q0-24.75 17.625-42.375T232 268h496q24.75 0 42.375 17.625T788 328v496q0 24.75-17.625 42.375T728 884H232Zm-32-440v380q0 12 10 22t22 10h496q12 0 22-10t10-22V444H200Z"/>
    </Icon>
  );
});

IconMaterialTopPanelOpenW100Filled.displayName = 'AmauiIconMaterialTopPanelOpenW100Filled';

export default IconMaterialTopPanelOpenW100Filled;
