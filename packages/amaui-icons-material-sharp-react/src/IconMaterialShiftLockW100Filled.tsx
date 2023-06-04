import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockW100Filled'

      short_name='ShiftLock'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M372 744V604H230l250-346 250 346H588v140H372ZM212 872v-28h536v28H212Z"/>
    </Icon>
  );
});

IconMaterialShiftLockW100Filled.displayName = 'AmauiIconMaterialShiftLockW100Filled';

export default IconMaterialShiftLockW100Filled;
