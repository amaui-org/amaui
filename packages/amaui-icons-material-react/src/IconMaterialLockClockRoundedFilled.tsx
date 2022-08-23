import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockClockRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockClockRoundedFilled'
      short_name='LockClock'

      {...props}
    >
      <path d="M9 8H15V6Q15 4.75 14.125 3.875Q13.25 3 12 3Q10.75 3 9.875 3.875Q9 4.75 9 6ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM19.3 20Q19.45 20.15 19.65 20.15Q19.85 20.15 20 20Q20.15 19.85 20.15 19.65Q20.15 19.45 20 19.3L18.5 17.8V15.5Q18.5 15.3 18.35 15.15Q18.2 15 18 15Q17.8 15 17.65 15.15Q17.5 15.3 17.5 15.5V18Q17.5 18.05 17.65 18.35ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V10Q4 9.175 4.588 8.587Q5.175 8 6 8H7V6Q7 3.925 8.463 2.462Q9.925 1 12 1Q14.075 1 15.538 2.462Q17 3.925 17 6V8H18Q18.825 8 19.413 8.587Q20 9.175 20 10V11.3Q19.5 11.125 19 11.062Q18.5 11 18 11Q15.075 11 13.038 13.037Q11 15.075 11 18Q11 19.075 11.338 20.087Q11.675 21.1 12.25 22Z"/>
    </Icon>
  );
});

IconMaterialLockClockRoundedFilled.displayName = 'AmauiIconMaterialLockClockRoundedFilled';

export default IconMaterialLockClockRoundedFilled;
