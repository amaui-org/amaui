import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardDriveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDriveW100'

      short_name='HardDrive'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 746h640V518H160v228Zm525.882-80Q700 666 710 656.118q10-9.883 10-24Q720 618 710.118 608q-9.883-10-24-10Q672 598 662 607.882q-10 9.883-10 24Q652 646 661.882 656q9.883 10 24 10ZM828 490h-39L687 384H273L171 490h-39l129-134h438l129 134ZM132 774V490h696v284H132Z"/>
    </Icon>
  );
});

IconMaterialHardDriveW100.displayName = 'AmauiIconMaterialHardDriveW100';

export default IconMaterialHardDriveW100;
