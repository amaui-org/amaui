import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShareOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareOffW100'

      short_name='ShareOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 362q27 0 46.5-19.5T786 296q0-27-19.5-46.5T720 230q-27 0-46.5 19.5T654 296q0 27 19.5 46.5T720 362Zm0 560q27 0 46.5-19.5T786 856q0-27-19.5-46.5T720 790q-27 0-46.5 19.5T654 856q0 27 19.5 46.5T720 922Zm0-626Zm0 560Zm-480 88q-62 0-105-43T92 796q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-93-378q4-35 30-59.5t63-24.5q22 0 41 9.5t33 26.5l318-188q-3-8-4.5-17t-1.5-17q0-39 27.5-66.5T720 202q39 0 66.5 27.5T814 296q0 39-27.5 66.5T720 390q-22 0-41-9.5T646 354L328 542q2 5 3 11t2 13q-22-9-45-13.5t-48-4.5q-25 0-48 4.5T147 566Zm573 384q-39 0-66.5-27.5T626 856q0-8 1.5-17t4.5-17l-152-90q-3-11-6.5-21t-8.5-20l181 107q14-17 33-26.5t41-9.5q39 0 66.5 27.5T814 856q0 39-27.5 66.5T720 950ZM240 816l70 70 20-20-70-70 70-70-20-20-70 70-70-70-20 20 70 70-70 70 20 20 70-70Z"/>
    </Icon>
  );
});

IconMaterialShareOffW100.displayName = 'AmauiIconMaterialShareOffW100';

export default IconMaterialShareOffW100;
