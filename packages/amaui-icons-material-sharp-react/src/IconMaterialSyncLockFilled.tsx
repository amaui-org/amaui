import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncLockFilled'

      short_name='SyncLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 22v-5h1v-1q0-.825.587-1.413Q17.175 14 18 14q.825 0 1.413.587Q20 15.175 20 16v1h1v5Zm2-5h2v-1q0-.425-.288-.713Q18.425 15 18 15t-.712.287Q17 15.575 17 16ZM4 20v-2h2.725q-1.275-1.1-2-2.65Q4 13.8 4 12q0-2.8 1.7-4.938Q7.4 4.925 10 4.25v2.1q-1.75.625-2.875 2.162Q6 10.05 6 12q0 1.35.537 2.488Q7.075 15.625 8 16.45V14h2v6Zm14-8q0-1.275-.512-2.387Q16.975 8.5 16 7.55V10h-2V4h6v2h-2.725q1.475 1.325 2.088 2.837Q19.975 10.35 20 12Z"/>
    </Icon>
  );
});

IconMaterialSyncLockFilled.displayName = 'AmauiIconMaterialSyncLockFilled';

export default IconMaterialSyncLockFilled;
