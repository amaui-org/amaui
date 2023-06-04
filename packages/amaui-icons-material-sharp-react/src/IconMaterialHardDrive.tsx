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
      <path d="M160 776h640V536H160v240Zm520-60q25 0 42.5-17.5T740 656q0-25-17.5-42.5T680 596q-25 0-42.5 17.5T620 656q0 25 17.5 42.5T680 716Zm200-260H767l-80-80H273l-80 80H80l160-160h480l160 160ZM80 856V456h800v400H80Z"/>
    </Icon>
  );
});

IconMaterialHardDrive.displayName = 'AmauiIconMaterialHardDrive';

export default IconMaterialHardDrive;
