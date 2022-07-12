import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLogoutSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutSharp'
      short_name='Logout'

      {...props}
    >
      <path d="M16 17 14.625 15.55 17.175 13H9V11H17.175L14.625 8.45L16 7L21 12ZM3 21V3H12V5H5V19H12V21Z"/>
    </Icon>
  )
});

export default IconMaterialLogoutSharp;
