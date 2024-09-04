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
      <path d="M160-120q0-17 11.5-28.5T200-160h560q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H200q-17 0-28.5-11.5T160-120Zm44-320q-26 0-36.5-22.5T173-505l127-156 340 340v41q0 17-11.5 28.5T600-240H360q-17 0-28.5-11.5T320-280v-160H204Zm307-402 276 337q16 20 5.5 42.5T756-440h-89q-16 0-30.5-6T611-463L377-697q-11-11-12-26.5t9-27.5l75-91q12-15 31-15t31 15ZM791-57 55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57Z"/>
    </Icon>
  );
});

IconMaterialShiftLockOffFilled.displayName = 'AmauiIconMaterialShiftLockOffFilled';

export default IconMaterialShiftLockOffFilled;
