import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLowDensityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowDensityW100Filled'

      short_name='LowDensity'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 456v-80h28v80h-28Zm108 108v-28h80v28h-80Zm0-268v-28h80v28h-80Zm160 150v-80h28v80h-28ZM232 884q-24.75 0-42.375-17.625T172 824V550q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v274q0 14 9 23t23 9h496q14 0 23-9t9-23V328q0-14-9-23t-23-9H454q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h274q24.75 0 42.375 17.625T788 328v496q0 24.75-17.625 42.375T728 884H232Zm-60-588q0-11.55 8.225-19.775Q188.45 268 200 268v28h-28Zm268 268v-28h28q0 12-8.225 20T440 564Z"/>
    </Icon>
  );
});

IconMaterialLowDensityW100Filled.displayName = 'AmauiIconMaterialLowDensityW100Filled';

export default IconMaterialLowDensityW100Filled;
