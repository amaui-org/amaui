import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneLockedW100Filled'

      short_name='PhoneLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.25 9.7q-.325 0-.537-.213-.213-.212-.213-.537v-2.9q0-.325.213-.538.212-.212.537-.212h.25v-1q0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213v1h.25q.325 0 .538.212.212.213.212.538v2.9q0 .325-.212.537-.213.213-.538.213Zm.95-4.4h2v-1q0-.425-.287-.713-.288-.287-.713-.287t-.712.287q-.288.288-.288.713Zm2.15 14.25q-2.425 0-4.962-1.3-2.538-1.3-4.6-3.363-2.063-2.062-3.375-4.587Q4.1 7.775 4.1 5.35q0-.45.3-.75t.75-.3h2q.45 0 .762.262.313.263.413.688l.45 2.05q.075.4-.013.725-.087.325-.362.55L6.3 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.05-2.15q.275-.275.563-.363.287-.087.637-.012l1.7.35q.425.1.688.413.262.312.262.762v1.95q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialPhoneLockedW100Filled.displayName = 'AmauiIconMaterialPhoneLockedW100Filled';

export default IconMaterialPhoneLockedW100Filled;
