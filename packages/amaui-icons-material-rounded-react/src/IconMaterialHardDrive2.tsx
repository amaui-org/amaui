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
      <path d="M560 856q17 0 28.5-11.5T600 816q0-17-11.5-28.5T560 776q-17 0-28.5 11.5T520 816q0 17 11.5 28.5T560 856Zm120 0q17 0 28.5-11.5T720 816q0-17-11.5-28.5T680 776q-17 0-28.5 11.5T640 816q0 17 11.5 28.5T680 856ZM120 616V256q0-33 23.5-56.5T200 176h560q33 0 56.5 23.5T840 256v360h-80V256H200v360h-80Zm80 80v200h560V696H200Zm0 280q-33 0-56.5-23.5T120 896V616h720v280q0 33-23.5 56.5T760 976H200Zm0-360h560-560Zm0 80h560-560Z"/>
    </Icon>
  );
});

IconMaterialHardDrive2.displayName = 'AmauiIconMaterialHardDrive2';

export default IconMaterialHardDrive2;
