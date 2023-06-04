import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardDrive2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDrive2'

      short_name='HardDrive2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M560 856q17 0 28.5-11.5T600 816q0-17-11.5-28.5T560 776q-17 0-28.5 11.5T520 816q0 17 11.5 28.5T560 856Zm120 0q17 0 28.5-11.5T720 816q0-17-11.5-28.5T680 776q-17 0-28.5 11.5T640 816q0 17 11.5 28.5T680 856ZM120 616V176h720v440h-80V256H200v360h-80Zm80 80v200h560V696H200Zm-80 280V616h720v360H120Zm80-360h560-560Zm0 80h560-560Z"/>
    </Icon>
  );
});

IconMaterialHardDrive2.displayName = 'AmauiIconMaterialHardDrive2';

export default IconMaterialHardDrive2;
