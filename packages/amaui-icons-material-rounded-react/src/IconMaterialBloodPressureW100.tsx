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
      <path d="M132 462v-94q0-26 17-43t43-17h576q26 0 43 17t17 43v206q0 6-4 10t-10 4q-6 0-10-4t-4-10V368q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v94h-28Zm148 288q-5 0-8-1.5t-5-5.5l-76-153h-45q-6 0-10-4t-4-10q0-6 4-10t10-4h54q4 0 7 2t5 6l68 135 147-295q2-3 5.5-4.5t7.5-1.5q4 0 7 1.5t5 4.5l83 165q-6 5-12 9.5t-11 9.5l-73-146-147 295q-2 4-5 5.5t-7 1.5Zm161 94H192q-26 0-43-17t-17-43v-94h28v94q0 12 10 22t22 10h243q2 8 3 14.5t3 13.5Zm39-268Zm200 348q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm71-199q4-4 4.5-9.5T751 705q-4-4-10-4t-10 4l-53 53q-4 4-4.5 9.5T678 778q4 4 10 4t10-4l53-53Z"/>
    </Icon>
  );
});

IconMaterialBloodPressureW100.displayName = 'AmauiIconMaterialBloodPressureW100';

export default IconMaterialBloodPressureW100;
