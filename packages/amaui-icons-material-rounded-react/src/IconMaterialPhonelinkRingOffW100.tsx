import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkRingOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRingOffW100'

      short_name='PhonelinkRingOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M828 990 54 216q-4-4-4.5-9.5T54 196q5-5 10-5t10 5l774 774q4 4 4.5 9.5T848 990q-5 5-10 5t-10-5ZM252 394l28 28v420h401l27 27v35q0 25-17.5 42.5T648 964H312q-25 0-42.5-17.5T252 904V394Zm28 476v34q0 14 9 23t23 9h336q14 0 23-9t9-23v-34H280Zm0-581v-7h400v-34q0-14-9-23t-23-9H312q-14 0-23 9t-9 23v41l-28-28v-13q0-25 17.5-42.5T312 188h336q26 0 43 17t17 43v124h-28v-62H300l-20-21Zm0 581v66-66Zm574-294q0 46-15.5 87.5T793 740q-5 5-10.5 6t-10.5-4q-5-5-4-10.5t5-10.5q26-30 39.5-67.5T826 576q0-40-13.5-77.5T773 431q-4-5-5-10.5t4-10.5q5-5 10.5-4t10.5 6q30 35 45.5 76.5T854 576ZM680 216v66-66Zm20 454q-2 2-4.5 3t-5.5 1q-6 0-10-4t-4-10q0-3 1-5.5t3-4.5q1-1 1-1.5t1-.5q17-14 27-32.5t10-39.5q0-21-11-40.5T680 502q-2-2-3-4.5t-1-5.5q0-6 4-10t10-4q3 0 5.5 1t4.5 3q48 41 48 94t-48 94Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRingOffW100.displayName = 'AmauiIconMaterialPhonelinkRingOffW100';

export default IconMaterialPhonelinkRingOffW100;
