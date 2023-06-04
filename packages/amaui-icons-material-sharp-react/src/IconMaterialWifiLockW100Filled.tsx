import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLockW100Filled'

      short_name='WifiLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.15 1.85 9q2.125-1.825 4.738-2.762Q9.2 5.3 12 5.3t5.413.938Q20.025 7.175 22.15 9l-1.2 1.2H19q-1.95 0-3.325 1.4Q14.3 13 14.3 15v1.85Zm4.3.25V15h1.025v-1q0-.725.487-1.213.488-.487 1.213-.487.725 0 1.213.487.487.488.487 1.213v1h.975v4.4Zm1.725-4.4h2v-1q0-.425-.287-.713Q19.45 13 19.025 13t-.713.287q-.287.288-.287.713Z"/>
    </Icon>
  );
});

IconMaterialWifiLockW100Filled.displayName = 'AmauiIconMaterialWifiLockW100Filled';

export default IconMaterialWifiLockW100Filled;
