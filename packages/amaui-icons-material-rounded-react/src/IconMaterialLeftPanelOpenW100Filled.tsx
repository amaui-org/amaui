import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelOpenW100Filled'

      short_name='LeftPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M495 495v161.882Q495 667 504.5 671t16.75-3.25l71.05-71.05Q601 588 601 576t-9-21l-70.778-70.778Q514 477 504.5 480.75 495 484.5 495 495ZM232 884q-24.75 0-42.375-17.625T172 824V328q0-24.75 17.625-42.375T232 268h496q24.75 0 42.375 17.625T788 328v496q0 24.75-17.625 42.375T728 884H232Zm116-28h380q12 0 22-10t10-22V328q0-12-10-22t-22-10H348v560Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelOpenW100Filled.displayName = 'AmauiIconMaterialLeftPanelOpenW100Filled';

export default IconMaterialLeftPanelOpenW100Filled;
