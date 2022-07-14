import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLogoutTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutTwoTone'
      short_name='Logout'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z M21,12l-4-4v3H9v2h8v3L21,12z"/></g>
    </Icon>
  );
});

export default IconMaterialLogoutTwoTone;
