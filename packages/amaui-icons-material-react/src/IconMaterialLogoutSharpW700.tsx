import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLogoutSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutSharpW700'
      short_name='Logout'

      {...props}
    >
      <path d="M16.025 18.2 13.825 15.975 16.225 13.575H8.55V10.425H16.225L13.825 8.025L16.025 5.8L22.2 12ZM1.8 21.85V2.15H12.2V5.3H4.95V18.7H12.2V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialLogoutSharpW700;
