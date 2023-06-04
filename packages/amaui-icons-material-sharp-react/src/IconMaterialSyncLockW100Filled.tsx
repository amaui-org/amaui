import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncLockW100Filled'

      short_name='SyncLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.3 21.65v-4.4h1.025v-1q0-.725.487-1.213.488-.487 1.213-.487.725 0 1.213.487.487.488.487 1.213v1h.975v4.4Zm1.725-4.4h2v-1q0-.425-.287-.713-.288-.287-.713-.287t-.713.287q-.287.288-.287.713ZM4.85 19.15v-.7h3.2q-1.95-1.7-2.675-3.2-.725-1.5-.725-3.15 0-2.35 1.313-4.25 1.312-1.9 3.387-2.7v.75q-1.8.775-2.9 2.475-1.1 1.7-1.1 3.725 0 1.575.675 2.9t2.525 2.95v-3.2h.7v4.4Zm13.8-7.1q0-1.65-.687-3-.688-1.35-2.513-2.975V9.25h-.7v-4.4h4.4v.7h-3.2q2.025 1.7 2.738 3.35.712 1.65.662 3.15Z"/>
    </Icon>
  );
});

IconMaterialSyncLockW100Filled.displayName = 'AmauiIconMaterialSyncLockW100Filled';

export default IconMaterialSyncLockW100Filled;
