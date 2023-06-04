import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLogoutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutFilled'

      short_name='Logout'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16 17-1.375-1.45 2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5ZM3 21V3h9v2H5v14h7v2Z"/>
    </Icon>
  );
});

IconMaterialLogoutFilled.displayName = 'AmauiIconMaterialLogoutFilled';

export default IconMaterialLogoutFilled;
