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
      <path d="M12 18.85q-.15 0-.275-.05-.125-.05-.25-.175L2.35 9.5q-.2-.2-.187-.475.012-.275.237-.475 2.05-1.6 4.5-2.425Q9.35 5.3 12 5.3q2.65 0 5.1.825 2.45.825 4.5 2.425.225.2.238.475.012.275-.188.475l-.7.7H19q-1.95 0-3.325 1.4Q14.3 13 14.3 15v1.85l-1.775 1.775q-.125.125-.25.175-.125.05-.275.05Zm5.2.55q-.35 0-.625-.275T16.3 18.5v-2.6q0-.35.275-.625T17.2 15h.125v-1q0-.725.487-1.213.488-.487 1.213-.487.725 0 1.213.487.487.488.487 1.213v1h.125q.35 0 .6.275t.25.625v2.6q0 .35-.275.625t-.625.275Zm.825-4.4h2v-1q0-.425-.287-.713Q19.45 13 19.025 13t-.713.287q-.287.288-.287.713Z"/>
    </Icon>
  );
});

IconMaterialWifiLockW100Filled.displayName = 'AmauiIconMaterialWifiLockW100Filled';

export default IconMaterialWifiLockW100Filled;
