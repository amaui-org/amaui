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
      <path d="M685.882 676Q700 676 710 666.118q10-9.883 10-24Q720 628 710.118 618q-9.883-10-24-10Q672 608 662 617.882q-10 9.883-10 24Q652 656 661.882 666q9.883 10 24 10ZM828 490H132l129-134h438l129 134ZM132 774V518h696v256H132Z"/>
    </Icon>
  );
});

IconMaterialHardDriveW100Filled.displayName = 'AmauiIconMaterialHardDriveW100Filled';

export default IconMaterialHardDriveW100Filled;
