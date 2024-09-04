import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftLockOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockOffFilled'

      short_name='ShiftLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-80h640v80H160Zm160-160v-200H120l180-221 340 340v81H320Zm314-200L351-723l129-157 360 440H634ZM819-28 27-820l57-57L876-85l-57 57Z"/>
    </Icon>
  );
});

IconMaterialShiftLockOffFilled.displayName = 'AmauiIconMaterialShiftLockOffFilled';

export default IconMaterialShiftLockOffFilled;
