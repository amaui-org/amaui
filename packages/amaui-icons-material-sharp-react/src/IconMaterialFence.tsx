import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFence = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fence'

      short_name='Fence'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-4H3v-2h2v-2H3v-2h2V7l3-3 2 2 2.025-2 2 2 2-2 3 3v3H21v2h-1.975v2H21v2h-1.975v4Zm2-10h2V7.825l-1-1-1 1Zm4 0h2V7.825l-1-1-1 1Zm4.025 0H17V7.825l-1-1-.975.975ZM7 14h2v-2H7Zm4 0h2v-2h-2Zm4.025 0H17v-2h-1.975ZM7 18h2v-2H7Zm4 0h2v-2h-2Zm4.025 0H17v-2h-1.975Z"/>
    </Icon>
  );
});

IconMaterialFence.displayName = 'AmauiIconMaterialFence';

export default IconMaterialFence;
