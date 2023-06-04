import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPhoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhoneW100Filled'

      short_name='SettingsPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.2 10.7q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.488-.213-.212-.212-.212-.487t.212-.488q.213-.212.488-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-.85 8.85q-2.425 0-4.962-1.3-2.538-1.3-4.6-3.363-2.063-2.062-3.375-4.587Q4.1 7.775 4.1 5.35q0-.45.3-.75t.75-.3h2q.45 0 .762.262.313.263.413.688l.45 2.05q.075.4-.013.725-.087.325-.362.55L6.3 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.05-2.15q.275-.275.563-.363.287-.087.637-.012l1.7.35q.425.1.688.413.262.312.262.762v1.95q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhoneW100Filled.displayName = 'AmauiIconMaterialSettingsPhoneW100Filled';

export default IconMaterialSettingsPhoneW100Filled;
