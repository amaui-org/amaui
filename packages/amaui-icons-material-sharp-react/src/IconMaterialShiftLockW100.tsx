import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockW100'

      short_name='ShiftLock'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M372 744V604H230l250-346 250 346H588v140H372Zm28-28h160V576h111L480 307 289 576h111v140Zm80-205ZM212 872v-28h536v28H212Z"/>
    </Icon>
  );
});

IconMaterialShiftLockW100.displayName = 'AmauiIconMaterialShiftLockW100';

export default IconMaterialShiftLockW100;
