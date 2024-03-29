import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHome'

      short_name='EmergencyHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.425 21.45q-.575.575-1.425.575-.85 0-1.425-.575L2.55 13.425Q1.975 12.85 1.975 12q0-.85.575-1.425l8.025-8.025q.575-.575 1.425-.575.85 0 1.425.575l8.025 8.025q.575.575.575 1.425 0 .85-.575 1.425ZM12 20.025 20.025 12 12 3.975 3.975 12 12 20.025ZM11 13h2V7h-2Zm1 3q.425 0 .713-.288Q13 15.425 13 15t-.287-.713Q12.425 14 12 14t-.712.287Q11 14.575 11 15t.288.712Q11.575 16 12 16Zm0-4Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHome.displayName = 'AmauiIconMaterialEmergencyHome';

export default IconMaterialEmergencyHome;
