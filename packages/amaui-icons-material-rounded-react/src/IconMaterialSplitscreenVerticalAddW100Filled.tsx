import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenVerticalAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenVerticalAddW100Filled'

      short_name='SplitscreenVerticalAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-172h-78q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h78v-78q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v78h78q5.95 0 9.975 4.035 4.025 4.035 4.025 10T875.975-176q-4.025 4-9.975 4h-78v78q0 5.95-4.035 9.975-4.035 4.025-10 4.025T764-84.025q-4-4.025-4-9.975v-78Zm-528 0q-24.75 0-42.375-17.625T172-232v-496q0-24.75 17.625-42.375T232-788h129q24.75 0 42.375 17.625T421-728v496q0 24.75-17.625 42.375T361-172H232Zm336-9q-14-8-21-21.5t-7-29.5v-496q0-24.75 17.625-42.375T600-788h128q24.75 0 42.375 17.625T788-728v337q-5-.5-10-.75t-10-.25q-75 0-131 51t-67 126q-2 8-2 16.667V-181Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenVerticalAddW100Filled.displayName = 'AmauiIconMaterialSplitscreenVerticalAddW100Filled';

export default IconMaterialSplitscreenVerticalAddW100Filled;
