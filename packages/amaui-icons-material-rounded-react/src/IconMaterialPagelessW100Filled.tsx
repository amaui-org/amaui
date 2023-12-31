import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPagelessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagelessW100Filled'

      short_name='Pageless'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M368-132H152q-24.75 0-42.375-17.625T92-192v-176q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v176q0 14 9 23t23 9h216q5.95 0 9.975 4.035 4.025 4.035 4.025 10T377.975-136q-4.025 4-9.975 4Zm224-28h216q14 0 23-9t9-23v-176q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v176q0 24.75-17.625 42.375T808-132H592q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4ZM92-591v-177q0-24.75 17.625-42.375T152-828h216q5.95 0 9.975 4.035 4.025 4.035 4.025 10T377.975-804q-4.025 4-9.975 4H152q-14 0-23 9t-9 23v177q0 5.95-4.035 9.975-4.035 4.025-10 4.025T96-581.025q-4-4.025-4-9.975Zm748 0v-177q0-14-9-23t-23-9H592q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h216q24.75 0 42.375 17.625T868-768v177q0 5.95-4.035 9.975-4.035 4.025-10 4.025T844-581.025q-4-4.025-4-9.975Z"/>
    </Icon>
  );
});

IconMaterialPagelessW100Filled.displayName = 'AmauiIconMaterialPagelessW100Filled';

export default IconMaterialPagelessW100Filled;
