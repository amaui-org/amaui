import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardDrive2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDrive2Filled'

      short_name='HardDrive2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M560 856q17 0 28.5-11.5T600 816q0-17-11.5-28.5T560 776q-17 0-28.5 11.5T520 816q0 17 11.5 28.5T560 856Zm120 0q17 0 28.5-11.5T720 816q0-17-11.5-28.5T680 776q-17 0-28.5 11.5T640 816q0 17 11.5 28.5T680 856ZM120 616V176h720v440H120Zm0 360V696h720v280H120Z"/>
    </Icon>
  );
});

IconMaterialHardDrive2Filled.displayName = 'AmauiIconMaterialHardDrive2Filled';

export default IconMaterialHardDrive2Filled;
