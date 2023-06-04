import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardDriveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDriveW100Filled'

      short_name='HardDrive'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M686 676q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10ZM132 490l111-115q8-9 19.5-14t23.5-5h387q12 0 23.5 5t19.5 14l112 115H132Zm60 284q-26 0-43-17t-17-43V518h696v196q0 26-17.5 43T768 774H192Z"/>
    </Icon>
  );
});

IconMaterialHardDriveW100Filled.displayName = 'AmauiIconMaterialHardDriveW100Filled';

export default IconMaterialHardDriveW100Filled;
