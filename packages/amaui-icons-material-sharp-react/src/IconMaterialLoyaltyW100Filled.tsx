import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLoyaltyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoyaltyW100Filled'

      short_name='Loyalty'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13 16.75 2.9-3.05q.2-.2.3-.462.1-.263.1-.588 0-.575-.412-1.013-.413-.437-.988-.437-.5 0-.975.25t-.925.9q-.45-.65-.925-.9-.475-.25-.975-.25-.575 0-.987.437-.413.438-.413 1.013 0 .325.1.588.1.262.3.462ZM12.85 21 3.3 11.45V3.3h8.15L21 12.85ZM6.5 7.35q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Z"/>
    </Icon>
  );
});

IconMaterialLoyaltyW100Filled.displayName = 'AmauiIconMaterialLoyaltyW100Filled';

export default IconMaterialLoyaltyW100Filled;
