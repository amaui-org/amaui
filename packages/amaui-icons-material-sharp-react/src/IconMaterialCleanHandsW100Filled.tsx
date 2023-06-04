import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleanHandsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHandsW100Filled'

      short_name='CleanHands'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 8.8-.575-1.25L15.2 7l1.225-.575L17 5.2l.575 1.225L18.8 7l-1.225.55Zm3 4.55q-.575 0-.962-.388-.388-.387-.388-.962 0-.4.275-1.038Q19.2 10.325 20 9.15q.8 1.15 1.075 1.788.275.637.275 1.062 0 .575-.387.962-.388.388-.963.388ZM2.35 19.6v-7.3h2.7v7.3Zm11.2 1.05-7.8-2.3V12.3h2.5l7.15 2.625V16.4h-2.7l-2.85-1-.3.7 3.1 1h7.6v1.45Zm.8-8.25-5.525-2.1H5.7q.25-1.4 1.238-2.425Q7.925 6.85 9.65 6.65v-3.3h-1.5v-.7H13q.525 0 1.025.125.5.125.925.35l-.525.525q-.325-.15-.675-.225-.35-.075-.75-.075h-2.65v3.3q1.875.2 2.938 1.487Q14.35 9.425 14.35 11Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsW100Filled.displayName = 'AmauiIconMaterialCleanHandsW100Filled';

export default IconMaterialCleanHandsW100Filled;
