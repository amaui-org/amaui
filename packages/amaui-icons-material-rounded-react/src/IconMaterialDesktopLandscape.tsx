import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscape'

      short_name='DesktopLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320h280q17 0 28.5-11.5T600-360v-120q0-17-11.5-28.5T560-520H280q-17 0-28.5 11.5T240-480v120q0 17 11.5 28.5T280-320Zm80-290q0 13 8.5 21.5T390-580h250q4 0 7.5 1.5t6.5 4.5q3 3 4.5 6.5t1.5 7.5v90q0 13 8.5 21.5T690-440q13 0 21.5-8.5T720-470v-90q0-33-23.5-56.5T640-640H390q-13 0-21.5 8.5T360-610ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscape.displayName = 'AmauiIconMaterialDesktopLandscape';

export default IconMaterialDesktopLandscape;
