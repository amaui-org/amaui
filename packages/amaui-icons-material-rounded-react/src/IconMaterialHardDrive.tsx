import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardDrive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDrive'

      short_name='HardDrive'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 776h640V536H160v240Zm520-60q25 0 42.5-17.5T740 656q0-25-17.5-42.5T680 596q-25 0-42.5 17.5T620 656q0 25 17.5 42.5T680 716Zm200-260H767l-80-80H273l-80 80H80l137-137q11-11 25.5-17t30.5-6h414q16 0 30.5 6t25.5 17l137 137ZM160 856q-33 0-56.5-23.5T80 776V456h800v320q0 33-23.5 56.5T800 856H160Z"/>
    </Icon>
  );
});

IconMaterialHardDrive.displayName = 'AmauiIconMaterialHardDrive';

export default IconMaterialHardDrive;
