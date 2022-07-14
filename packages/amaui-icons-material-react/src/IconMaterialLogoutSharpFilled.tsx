import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLogoutSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutSharpFilled'
      short_name='Logout'

      {...props}
    >
      <path d="M16 17 14.625 15.55 17.175 13H9V11H17.175L14.625 8.45L16 7L21 12ZM3 21V3H12V5H5V19H12V21Z"/>
    </Icon>
  );
});

export default IconMaterialLogoutSharpFilled;
