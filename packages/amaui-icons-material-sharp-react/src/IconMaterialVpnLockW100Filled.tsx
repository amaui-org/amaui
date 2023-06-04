import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnLockW100Filled'

      short_name='VpnLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.825 0-3.412-.675Q7 19.35 5.825 18.175 4.65 17 3.975 15.412 3.3 13.825 3.3 12t.675-3.413Q4.65 7 5.825 5.825t2.763-1.85Q10.175 3.3 12 3.3q.8 0 1.538.137.737.138 1.462.363V5q0 .825-.587 1.412Q13.825 7 13 7h-2v2q0 .425-.287.712Q10.425 10 10 10H8v2h6q.425 0 .713.287.287.288.287.713v3h1q.675 0 1.188.4.512.4.712 1 .975-1.05 1.538-2.437Q20 13.575 20 12v-.5q0-.225-.05-.5h.7q.05.275.05.5v.5q0 1.825-.675 3.412-.675 1.588-1.85 2.763-1.175 1.175-2.762 1.85-1.588.675-3.413.675Zm-1-.75V18q-.825 0-1.412-.587Q9 16.825 9 16v-1l-4.8-4.8q-.075.45-.138.9Q4 11.55 4 12q0 3.05 2.013 5.312Q8.025 19.575 11 19.95ZM17 9V4.6h1v-1q0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213v1h1V9Zm1.7-4.4h2v-1q0-.425-.287-.713-.288-.287-.713-.287t-.712.287q-.288.288-.288.713Z"/>
    </Icon>
  );
});

IconMaterialVpnLockW100Filled.displayName = 'AmauiIconMaterialVpnLockW100Filled';

export default IconMaterialVpnLockW100Filled;
