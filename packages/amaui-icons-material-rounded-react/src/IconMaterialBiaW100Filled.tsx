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
      <path d="M280 482h179q-14-13-21.5-29t-7.5-37q0-11 2.25-21t6.75-19H312q-14 0-23 9t-9 23v74Zm349.009 20Q691 502 745.5 485.5T800 416q0-53-54.509-69.5t-116.5-16.5Q567 330 512.5 346.5T458 416q0 53 54.509 69.5t116.5 16.5ZM192 844q-24.75 0-42.375-17.625T132 784V542q0-24.75 17.625-42.375T192 482h60v-74q0-24.75 17.625-42.375T312 348h149q29-25 74.626-35.5Q581.252 302 629 302q73 0 136 25.5t63 88.5v368q0 24.75-17.625 42.375T768 844H614V736q0-5.95-4.035-9.975-4.035-4.025-10-4.025T590 726.025q-4 4.025-4 9.975v108H454V736q0-5.95-4.035-9.975-4.035-4.025-10-4.025T430 726.025q-4 4.025-4 9.975v108H294V736q0-5.95-4.035-9.975-4.035-4.025-10-4.025T270 726.025q-4 4.025-4 9.975v108h-74Z"/>
    </Icon>
  );
});

IconMaterialBiaW100Filled.displayName = 'AmauiIconMaterialBiaW100Filled';

export default IconMaterialBiaW100Filled;
