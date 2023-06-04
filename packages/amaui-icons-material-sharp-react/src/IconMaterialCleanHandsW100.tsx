import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleanHandsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHandsW100'

      short_name='CleanHands'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 8.8-.575-1.25L15.2 7l1.225-.575L17 5.2l.575 1.225L18.8 7l-1.225.55Zm3 4.55q-.575 0-.962-.388-.388-.387-.388-.962 0-.4.275-1.038Q19.2 10.325 20 9.15q.8 1.15 1.075 1.788.275.637.275 1.062 0 .575-.387.962-.388.388-.963.388Zm-5.65-.95-.7-.25V11q0-1.525-1.062-2.588Q11.525 7.35 10 7.35q-1.425 0-2.375.85T6.4 10.3h-.7q.25-1.4 1.238-2.425Q7.925 6.85 9.65 6.65v-3.3h-1.5v-.7H13q.525 0 1.025.125.5.125.925.35l-.525.525q-.325-.15-.675-.225-.35-.075-.75-.075h-2.65v3.3q1.875.2 2.938 1.487Q14.35 9.425 14.35 11Zm-.8 8.25-7.8-2.3v1.25h-3.4v-7.3h5.9l7.15 2.6v1.5h4.85v2.15ZM3.05 18.9h2V13h-2Zm10.45 1 6.05-1.875V17.1h-6.9l-3.1-1 .25-.675 2.925.975H14.7v-1L8.15 13h-2.4v4.6Zm-4.675-9.6Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsW100.displayName = 'AmauiIconMaterialCleanHandsW100';

export default IconMaterialCleanHandsW100;
