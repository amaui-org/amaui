import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReorderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReorderW100Filled'

      short_name='QuickReorder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M109-212v-28h166v-106H149v-28h126v-106h-84v-28h84v-116l-68-150 26-12 72 158h476l-74-156 26-12 78 168v416H109Zm354-254h160q5.95 0 9.975-4.035 4.025-4.035 4.025-10T632.975-490q-4.025-4-9.975-4H463q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Z"/>
    </Icon>
  );
});

IconMaterialQuickReorderW100Filled.displayName = 'AmauiIconMaterialQuickReorderW100Filled';

export default IconMaterialQuickReorderW100Filled;
