import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLogoutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutW100'

      short_name='Logout'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.35 15.75-.5-.5L18.1 13H9.3v-.7h8.8l-2.25-2.25.5-.5 3.1 3.1ZM4.55 21V4.3h7.75V5H5.25v15.3h7.05v.7Z"/>
    </Icon>
  );
});

IconMaterialLogoutW100.displayName = 'AmauiIconMaterialLogoutW100';

export default IconMaterialLogoutW100;
