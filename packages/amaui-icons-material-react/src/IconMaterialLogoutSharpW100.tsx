import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLogoutSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutSharpW100'
      short_name='Logout'

      {...props}
    >
      <path d="M16.35 15.75 15.85 15.25 18.1 13H9.3V12.3H18.1L15.85 10.05L16.35 9.55L19.45 12.65ZM4.55 21V4.3H12.3V5H5.25V20.3H12.3V21Z"/>
    </Icon>
  );
});

export default IconMaterialLogoutSharpW100;
