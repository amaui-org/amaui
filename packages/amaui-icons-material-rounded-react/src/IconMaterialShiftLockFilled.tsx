import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockFilled'

      short_name='ShiftLock'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 776V616H204q-26 0-36.5-22.5T173 551l276-337q12-15 31-15t31 15l276 337q16 20 5.5 42.5T756 616H640v160q0 17-11.5 28.5T600 816H360q-17 0-28.5-11.5T320 776ZM200 976q-17 0-28.5-11.5T160 936q0-17 11.5-28.5T200 896h560q17 0 28.5 11.5T800 936q0 17-11.5 28.5T760 976H200Z"/>
    </Icon>
  );
});

IconMaterialShiftLockFilled.displayName = 'AmauiIconMaterialShiftLockFilled';

export default IconMaterialShiftLockFilled;
