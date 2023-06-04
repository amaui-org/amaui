import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBiaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiaW100Filled'

      short_name='Bia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 482h179q-14-13-21.5-29t-7.5-37q0-11 2.25-21t6.75-19H280v106Zm349.009 20Q691 502 745.5 485.5T800 416q0-53-54.509-69.5t-116.5-16.5Q567 330 512.5 346.5T458 416q0 53 54.509 69.5t116.5 16.5ZM132 844V482h120V348h209q29-25 74.626-35.5Q581.252 302 629 302q73 0 136 25.5t63 88.5v428H614V722h-28v122H454V722h-28v122H294V722h-28v122H132Z"/>
    </Icon>
  );
});

IconMaterialBiaW100Filled.displayName = 'AmauiIconMaterialBiaW100Filled';

export default IconMaterialBiaW100Filled;
