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
      <path d="M320 816V616H120l360-440 360 440H640v200H320ZM160 976v-80h640v80H160Z"/>
    </Icon>
  );
});

IconMaterialShiftLockFilled.displayName = 'AmauiIconMaterialShiftLockFilled';

export default IconMaterialShiftLockFilled;
