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
      <path d="M192 746h576q14 0 23-9t9-23V518H160v196q0 14 9 23t23 9Zm493.882-80Q700 666 710 656.118q10-9.883 10-24Q720 618 710.118 608q-9.883-10-24-10Q672 598 662 607.882q-10 9.883-10 24Q652 646 661.882 656q9.883 10 24 10ZM828 490h-39L687 384H273L171 490h-39l112-116q8-9 19.278-13.5Q274.556 356 287 356h386q12.444 0 23.722 4.5T716 374l112 116ZM192 774q-24.75 0-42.375-17.625T132 714V490h696v224q0 24.75-17.625 42.375T768 774H192Z"/>
    </Icon>
  );
});

IconMaterialHardDriveW100.displayName = 'AmauiIconMaterialHardDriveW100';

export default IconMaterialHardDriveW100;
