import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBloodPressureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodPressureW100'

      short_name='BloodPressure'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 462v-94q0-26 17-43t43-17h576q26 0 43 17t17 43v220h-28V368q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v94h-28Zm309 382H192q-26 0-43-17t-17-43v-94h28v94q0 12 10 22t22 10h243q2 8 3 14.5t3 13.5Zm39-268Zm200 348q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm8-136 73-73-20-20-73 73 20 20ZM132 590v-28h76l72 143 159-320 96 190q-6 5-12 9.5t-11 9.5l-73-146-160 320-88-178h-59Z"/>
    </Icon>
  );
});

IconMaterialBloodPressureW100.displayName = 'AmauiIconMaterialBloodPressureW100';

export default IconMaterialBloodPressureW100;
